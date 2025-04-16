import type { Request, Response } from "express";
import SecurityRepository from "../repository/security_repository.js";
import argon2 from "argon2";
import UserRepository from "../repository/user_repository.js";
import type User from "../model/user.js";
import SimpleCrypto from "simple-crypto-js";
import jwt from "jsonwebtoken";


class SecurityController {
    public register = async (req: Request, res: Response) => {
        // hacher le mot de passe
        // await argon2.hash(req.body.password);

        const results = await new SecurityRepository().register({
            ...req.body,
            password: await argon2.hash(req.body.password),
        });

		console.log(req.body);
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

		// crypter le mot de passe et générer uen partie de la clé de décryptage
		const randomKey = SimpleCrypto.default.generateRandom();

		// la clé de décryptage contenant la partie aléatoire et la partie fixe
		const key = `${process.env.KEY}${randomKey}`
		
		const crypto = new SimpleCrypto.default(key);
		const passWordEncrypted = crypto.encrypt(req.body.password);

		// console.log(passWordEncrypted);
		
		
		/*
			status: code de statut HTTP
			json: formater une réponse en JSON
		*/
		res.json({
			status: 200,
			message: "User connected",
			data: {...(user as User), password: passWordEncrypted, key: randomKey},
		});
		return;
	};

	public auth = async (req: Request, res: Response) => {
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

		// recréer la clé de décryptage en récupérant la partie variable de la clé et la clé fixe
		const key = `${process.env.KEY}${req.body.key}`; 

		// décrypter le mot de passe 
		const crypto = new SimpleCrypto.default(key);

		let passWordDecrypted:string

		try {
			passWordDecrypted = crypto.decrypt(req.body.password) as string;
			// console.log(passWordDecrypted);
		} catch (error) {
			res.status(401).json({
				status: 401,
				// afficher un simple message pour la production, sinon afficher l'erreur
				message: process.env.NODE_ENV === "prod" ? "Error" : "Unauthorized",
			});
			// bloquer la suite du script
			return;
		}
		
		// vérifier le mot de passe
		const passwordVerify = await argon2.verify(
			(user as User).password,
			passWordDecrypted,
		);

		if (!passwordVerify) {
			res.status(401).json({
				status: 401,
				// afficher un simple message pour la production, sinon afficher l'erreur
				message:
					process.env.NODE_ENV === "prod" ? "Error" : "Unauthorized",
			});
			// bloquer la suite du script
			return;
		}

		// générer le JSON WEB Token (JWT)
		// en prod = le token va expirer au bout de 30 secondes,
		// en dev/test = va experier au bout de 10 heures.
		const token = jwt.sign({ user : req.body }, process.env.JWT_KEY as string, {
			expiresIn: process.env.NODE_ENV === "prod" ? 30 : 60*60*10,
		});
		
		/*
			status: code de statut HTTP
			json: formater une réponse en JSON
		*/
		res.status(200).json({
			message: "User authenticated",
			data: { token: token },
		});
		return;
	};
}
     
export default SecurityController;   