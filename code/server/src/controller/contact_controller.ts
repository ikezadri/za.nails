import type { Request, Response } from "express";
import ContactRepository from "../repository/contact_repository.js";

class ContactController {
	// récuperer tous les documents
	public index = async (req: Request, res: Response) => {
        const results = await new ContactRepository().selectAll();
        
        // réponse HTTP
        res.status(200).json({
            status:200,
            message: "ziziidées",
            data: results
        })
    };
}

export default ContactController;
