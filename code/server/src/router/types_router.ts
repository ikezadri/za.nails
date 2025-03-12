import express, {type Request, type Response} from "express";
import TypesController from "../controller/types_controller.js";

class TypesRouter{
    // propiétés
    private router = express.Router();

    // méthodes
    public getRoutes = () => {
        this.router.get("/", new TypesController().index);
        this.router.get("/:id", new TypesController().one);

        return this.router;
    }
}

export default TypesRouter;