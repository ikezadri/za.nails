import type { Request, Response } from "express";
import RolesRepository from "../repository/role_repository.js";

class HomepageController {
    public index = async (req: Request, res: Response) => {
        const results = await new RolesRepository().selectAll();
        // console.log(results);
        // status = code de statut HTTP 
        // json: formater une réponse en JSON
        res.status(200).json({
            status: 200,
            message:'Welcome to my API',
            data: results
        });
    };
}

export default HomepageController;   