import type { Request, Response } from "express";

class NotFoundController {
    public index = (req: Request, res: Response) => {
        
        // status = code de statut HTTP 
        // json: formater une réponse en JSON
        res.status(404).json({
            status: 404,
            message:'Not found',
        });
    };
}

export default NotFoundController;