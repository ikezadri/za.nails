import type { NextFunction, Request, Response } from "express";
import fs from "node:fs/promises";
import path from "node:path";
import ModelRepository from "../repository/model_repository.js";
import type Model from "../model/model.js";

class ModelFileMiddleware {
    public process = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            // Récupérer le fichier transféré (s'il existe)
            const file = (req.files as Express.Multer.File[])?.[0];

            // Récupérer l'enregistrement par son ID (pour PUT ou DELETE)
            const model = await new ModelRepository().selectOne(req.body);

            // Dossier de destination des fichiers
            const destination = `${process.env.ASSETS_DIR}/img`;

            // Si un fichier est envoyé (POST ou PUT avec nouvelle image)
            if (file) {
                // Générer un nom de fichier avec l'extension appropriée
                const extension = file.mimetype.split("/")[1];
                const filename = `${file.filename}.${extension}`;

                // Renommer le fichier transféré
                await fs.rename(file.path, path.join(destination, filename));

                // Mettre à jour req.body avec le nouveau nom de fichier
                req.body[file.fieldname] = filename;

                // Si c'est une mise à jour (PUT), supprimer l'ancienne image si elle existe
                if (req.method === "PUT" && (model as Model).image) {
                    const oldImagePath = path.join(destination, (model as Model).image);
                    try {
                        await fs.access(oldImagePath); // Vérifier si le fichier existe
                        await fs.rm(oldImagePath); // Supprimer l'ancienne image
                    } catch (error) {
                        // Ignorer si le fichier n'existe pas (évite l'erreur ENOENT)
                        console.warn(`Ancienne image introuvable : ${oldImagePath}`);
                    }
                }
            } else {
                // Si aucun fichier n'est envoyé dans une requête PUT, conserver l'image existante
                if (req.method === "PUT" && (model as Model).image) {
                    req.body.image = (model as Model).image;
                }

                // Si c'est une suppression (DELETE), supprimer l'image associée si elle existe
                if (req.method === "DELETE" && (model as Model).image) {
                    const imagePath = path.join(destination, (model as Model).image);
                    try {
                        await fs.access(imagePath); // Vérifier si le fichier existe
                        await fs.rm(imagePath); // Supprimer l'image
                    } catch (error) {
                        // Ignorer si le fichier n'existe pas
                        console.warn(`Image introuvable pour suppression : ${imagePath}`);
                    }
                }
            }

            // Passer au middleware suivant
            next();
        } catch (error) {
            // Passer l'erreur au gestionnaire d'erreurs Express
            next(error);
        }
    };
}

export default ModelFileMiddleware;