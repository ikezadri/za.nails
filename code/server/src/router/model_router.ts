import express, { type Request, type Response } from "express";
import ModelController from "../controller/model_controller.js";
import multer from "multer";
import ModelFileMiddleware from "../middleware/model_file_middleware.js";
import AuthorizationMiddleware from "../middleware/authorization_middleware.js";

class ModelRouter {
	// propiétés
	private router = express.Router();

	// dossier de destination des fichiers transférés
	private upload = multer({ dest: `${process.env.ASSETS_DIR}/img` });

	

	// méthodes
	public getRoutes = () => {
		this.router.get("/", new ModelController().index);
		// créer une variable de route en la préfixant
		this.router.get("/:id", new ModelController().one);
		this.router.post(
			"/",
			new AuthorizationMiddleware().check(["admin"]),
			this.upload.any(),
			new ModelFileMiddleware().process,
			new ModelController().insert,
		);
		this.router.put(
			"/",
			new AuthorizationMiddleware().check(["admin"]),
			this.upload.any(),
			new ModelFileMiddleware().process,
			new ModelController().update,
		);
		this.router.delete(
			"/",
			new AuthorizationMiddleware().check(["admin"]),
			this.upload.any(),
			new ModelController().delete,
		);

		return this.router;
	};
}

export default ModelRouter;
