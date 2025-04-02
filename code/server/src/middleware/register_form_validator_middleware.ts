import type { NextFunction, Request, Response } from "express";
import RegisterFormValidator from "../validator/register_form_validator.js";

class RegistrerFormValidatorMiddleware{
    public validate = async (req: Request, res: Response, next: NextFunction) => {
        // envoyer la saisie au validateur 
        const isValid = await new RegisterFormValidator().isValid(req.body);

        if(isValid instanceof Error){
            res.status(400).json({
                status:400,
                message: process.env.NODE_ENV === "prod" ? "Error" : isValid,
            });
            return;
        }

        // passer le middleware 
        next();
    };
}

export default RegistrerFormValidatorMiddleware;