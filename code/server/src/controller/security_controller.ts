import type { Request, Response } from "express";
import SecurityRepository from "../repository/security_repository.js";
import argon2 from "argon2";
import UserRepository from "../repository/user_repository.js";
import type User from "../model/user.js";

class SecurityController {
    public register = async (req: Request, res: Response) => {
        // hacher le mot de passe
        // await argon2.hash(req.body.password);
        // console.log(req.body);
		
        const results = await new SecurityRepository().register({
            ...req.body,
            password: await argon2.hash(req.body.password),
        });

		// console.log(results);
		
        
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

   // connexion d'un utilisateur
	public login = async (req: Request, res: Response) => {
		// récupérer l'utilisateur par son email
		const results = await new UserRepository().selectOneByEmail(req.body.email);

		// si la requête SQL renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				// afficher un simple message pour la production, sinon afficher l'erreur
				message: process.env.NODE_ENV === "prod" ? "Error" : results,
			});
			// bloquer la suite du script
			return;
		}

		// si l'utilisateur n'existe pas
		if (!results) {
			res.status(403).json({
				status: 403,
				// afficher un simple message pour la production, sinon afficher l'erreur
				message: process.env.NODE_ENV === "prod" ? "Error" : "User not exists",
			});
			// bloquer la suite du script
			return;
		}

		// récupérer l'utilisateur
		const user = await new UserRepository().selectOne(results);

		// vérifier le mot de passe
		const passwordVerify = await argon2.verify(
			(user as User).password,
			req.body.password,
		);

		if (!passwordVerify) {
			res.status(403).json({
				status: 403,
				// afficher un simple message pour la production, sinon afficher l'erreur
				message:
					process.env.NODE_ENV === "prod" ? "Error" : "Incorrect password",
			});
			// bloquer la suite du script
			return;
		}

		/*
			status: code de statut HTTP
			json: formater une réponse en JSON
		*/
		res.json({
			status: 200,
			message: "User connected",
			data: user,
		});
		return;
	};
}
     
export default SecurityController;   