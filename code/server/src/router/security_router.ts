import express, { type Request, type Response } from "express";
import SecurityController from "../controller/security_controller.js";
import RegistrerFormValidatorMiddleware from "../middleware/register_form_validator_middleware.js";

class SecurityRouter {
	// propiétés
	private router = express.Router();

	// méthodes
	public getRoutes = () => {
		this.router.post(
			"/register",
			new RegistrerFormValidatorMiddleware().validate,
			new SecurityController().register,
		);
		this.router.post("/login", new SecurityController().login);
		this.router.post("/auth", new SecurityController().auth);
		return this.router;
	};
}

export default SecurityRouter;
