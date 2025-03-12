import type { Request, Response } from "express";
import ModelRepository from "../repository/model_repository.js";

class ModelController {
	public index = async (req: Request, res: Response) => {
		const results = await new ModelRepository().selectAll();

		// si la requête SQL renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				// afficher un simple message pour la production, sinon afficher le message d'erreur
				message: process.env.NODE_ENV === "prod" ? "Error" : results,
			});
			return;
		}
		// status = code de statut HTTP
		// json: formater une réponse en JSON
		res.status(200).json({
			status: 200,
			message: "sur ma route",
			data: results,
		});
	};

	public one = async (req: Request, res: Response) => {
		const results = await new ModelRepository().selectOne(req.params);

		// si la requête SQL renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				// afficher un simple message pour la production, sinon afficher le message d'erreur
				message: process.env.NODE_ENV === "prod" ? "Error" : results,
			});
			return;
		}
		// status = code de statut HTTP
		// json: formater une réponse en JSON
		res.status(200).json({
			status: 200,
			message: "black dance",
			data: results,
		});
	};

	public insert = async (req: Request, res: Response) => {
		const results = await new ModelRepository().insert(req.body);
		// console.log(results);

		// si la requête SQL renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				// afficher un simple message pour la production, sinon afficher le message d'erreur
				message: process.env.NODE_ENV === "prod" ? "Error" : results,
			});
			return;
		}
		// status = code de statut HTTP
		// json: formater une réponse en JSON
		res.status(200).json({
			status: 200,
			message: "black dance",
			data: results,
		});
	};

	public update = async (req: Request, res: Response) => {
		const results = await new ModelRepository().update(req.body);
		console.log(results);

		// si la requête SQL renvoie une erreur
		if (results instanceof Error) {
			res.status(400).json({
				status: 400,
				// afficher un simple message pour la production, sinon afficher le message d'erreur
				message: process.env.NODE_ENV === "prod" ? "Error" : results,
			});
			return;
		}
		// status = code de statut HTTP
		// json: formater une réponse en JSON
		res.status(200).json({
			status: 200,
			message: "black dance",
			data: results,
		});
	};

	public delete = async (req: Request, res: Response) => {
        // modifier un enregristrement
        // req.body permet de récupérer les contenus de la requête HTTP
        const results = await new ModelRepository().delete(req.body);
        
        // si la requête SQL renvoie une erreur 
        if(results instanceof Error){
            res.status(400).json({
                status: 400,
                // afficher un simple message pour la production, sinon afficher le message d'erreur
                message: process.env.NODE_ENV === "prod" ? 'Error' : results,
            })
            return;
        };
        // status = code de statut HTTP 
        // json: formater une réponse en JSON
        res.status(200).json({
            status: 200,
            message: "Supprimer rdv",
            data: results
        });
        return;
    };
}

export default ModelController;
