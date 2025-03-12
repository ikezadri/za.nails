import express, {type Request, type Response} from "express";
import RolesController from "../controller/roles_controller.js";

class RolesRouter{
    // propiétés
    private router = express.Router();

    // méthodes
    public getRoutes = () => {
        this.router.get("/", new RolesController().index);
        this.router.get("/:id", new RolesController().one);

        return this.router;
    }
}

export default RolesRouter;