import type { Request, Response } from "express";
import CommentaryRepository from "../repository/commentary_repository.js";

class CommentaryController {
    public index = async (req: Request, res: Response) => {
        const results = await new CommentaryRepository().selectAll();

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
            message: 'frenchie shore',
            data: results
        });
    };

    public one = async (req: Request, res: Response) => {
        const results = await new CommentaryRepository().selectOne(req.params);

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
            message: 'cartel de foufoune',
            data: results
        });
    };
}

export default CommentaryController;   