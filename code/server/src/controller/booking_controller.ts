import type { Request, Response } from "express";
import BookingRepository from "../repository/booking_repository.js";

class BookingController {
    public index = async (req: Request, res: Response) => {
        const results = await new BookingRepository().selectAll();

        

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
            message: 'genie musicale',
            data: results
        });
        return;
    };

    public one = async (req: Request, res: Response) => {
        const results = await new BookingRepository().selectOne(req.params);

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
            message: "OK",
            data: results
        });
        return;
    };

    public insert = async (req: Request, res: Response) => {
        // insérer un enregristrement
        // req.body permet de récupérer les contenus de la requête HTTP
        const results = await new BookingRepository().insert(req.body);
        console.log(results);
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
        res.status(201).json({
            status: 201,
            message: "Rendez-vous pris",
            data: results
        });
        return;
    };

    public update = async (req: Request, res: Response) => {
        // modifier un enregristrement
        // req.body permet de récupérer les contenus de la requête HTTP
        const results = await new BookingRepository().update(req.body);
        
        
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
        res.status(201).json({
            status: 210,
            message: "Rendez-vous modifier",
            data: results
        });
        return;
    };

    public delete = async (req: Request, res: Response) => {
        // modifier un enregristrement
        // req.body permet de récupérer les contenus de la requête HTTP
        const results = await new BookingRepository().delete(req.body);
        
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

export default BookingController;   