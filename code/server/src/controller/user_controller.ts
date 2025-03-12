import type { Request, Response } from "express";
import UserRepository from "../repository/user_repository.js";

class UserController {
    public index = async (req: Request, res: Response) => {
        const results = await new UserRepository().selectAll();

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
            message: 'fromage',
            data: results
        });
    };

    public one = async (req: Request, res: Response) => {
        const results = await new UserRepository().selectOne(req.params);

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
            message: 'bob leponge',
            data: results
        });
    };
}

export default UserController;   