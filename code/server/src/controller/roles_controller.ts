import type { Request, Response } from "express";
import RolesRepository from "../repository/roles_repository.js";

class RolesController {
    public index = async (req: Request, res: Response) => {
        const results = await new RolesRepository().selectAll();

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
            message: 'sza',
            data: results
        });
    };

    public one = async (req: Request, res: Response) => {
        const results = await new RolesRepository().selectOne(req.params);

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
            message: 'kendrick',
            data: results
        });
    };
}

export default RolesController;   