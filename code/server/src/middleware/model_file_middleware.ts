import type { NextFunction, Request, Response } from "express";
import fs from "node:fs/promises";
import ModelRepository from "../repository/model_repository.js";
import type Model from "../model/model.js";class ModelFileMiddleware {
	public process = async (req: Request, res: Response, next: NextFunction) => {
		// récupérer le fichier transférer
		const file = (req.files as Express.Multer.File[])[0];

		// récupérer l'enregistrement par son id
		const model: Model | unknown = await new ModelRepository().selectOne(
			req.body,
		);

		// si un fichier a été sélectionné
		if (file) {
			// ajouter un extension au nom du fichier
			const filename = `${file.filename}.${file.mimetype.split("/")[1]}`;

			// renommer le fichier transfére
			await fs.rename(file.path, `${file.destination}/${filename}`);

			// remplir la propriété de body en relation avec le fichier
			req.body[file.fieldname] = filename;

			// récupérer la méthode HTTP
			// si une modification est effectuée, supprimer l'action fichier
			if (req.method === "PUT") {
				await fs.rm(`${file.destination}/${(model as Model).image}`);
			}

			// si un fichier n'a pas été sélectionné
			else {
				// PUT > récupérer le nom de l'ancienne image et l'affecter à la propriété gérant le fichier 

				// DELETE > supprimer le fichier
			}

			// passer le middleware suivant
			next();
		}
	};
}
export default ModelFileMiddleware;
