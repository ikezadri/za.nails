import type { Request, Response } from "express";
import RolesRepository from "../repository/roles_repository.js";
import SecurityRepository from "../repository/security_repository.js";
import argon2 from "argon2";

class SecurityController {
    public register = async (req: Request, res: Response) => {
        // hacher le mot de passe
        // await argon2.hash(req.body.password);
        
        const results = await new SecurityRepository().register({
            ...req.body,
            password: await argon2.hash(req.body.password),
        });
        
        // si la requête SQL renvoie une erreur 
        if (results instanceof Error) {
            res.status(400).json({
                status: 400,
                // afficher un simple message pour la production, sinon afficher le message d'erreur
                message: process.env.NODE_ENV === "prod" ? 'Error' : results,
            })
            return;
        };
        // status = code de statut HTTP 
        // json: formater une réponse en JSON
        res.status(201).json({
            status: 201,
            message: 'Utilisateur créer',
            data: results
        });
    };

}
export default SecurityController;   