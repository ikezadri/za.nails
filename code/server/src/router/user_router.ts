import express, { type Request, type Response } from "express";
import UserController from "../controller/user_controller.js";
import AuthorizationMiddleware from "../middleware/authorization_middleware.js";

class UserRouter {
	// propiétés
	private router = express.Router();

	// méthodes
	public getRoutes = () => {
		this.router.get("/", new UserController().index);
		this.router.get("/:id", new UserController().one);
		this.router.post(
			"/",
			new AuthorizationMiddleware().check(["admin"]),
			new UserController().insert,
		);
		this.router.put("/", new UserController().update);
		new AuthorizationMiddleware().check(["admin"]);
		this.router.delete("/", new UserController().delete);
		new AuthorizationMiddleware().check(["admin"]);

		return this.router;
	};
}

export default UserRouter;
