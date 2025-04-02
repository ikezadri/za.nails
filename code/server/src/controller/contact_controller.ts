import type { Request, Response } from "express";
import ContactRepository from "../repository/contact.repository.js";

class ContactController {
	// récuperer tous les documents
	public index = async (req: Request, res: Response) => {
        const results = await new ContactRepository().selectAll();
        
        // réponse HTTP
        res.status(200).json({
            status:200,
            message: "ça marche",
            data: results
        })
    };

    public insert = async (req: Request, res: Response) => {
        const results = await new ContactRepository().insert(req.body);

        if (results instanceof Error){
            res.status(400).json({
                status:400,
                message: process.env.NODE_ENV === "prod" ? 'Error' : results
            });
            return;
        }

        res.status(201).json({
            status: 201,
            message: "Contact request created",
            data: results
        })
        return;
    }
}

export default ContactController;
