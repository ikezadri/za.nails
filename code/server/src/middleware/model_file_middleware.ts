import type { NextFunction, Request, Response } from "express";

class ModelFileMiddleware {
	public process = (req: Request, res: Response, next: NextFunction) => {
        console.log("model file middleware");
        
        // passer le middleware suivant
		next();
	};
}

export default ModelFileMiddleware;
