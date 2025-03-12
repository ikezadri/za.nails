import express, {type Request, type Response} from "express";
import ModelController from "../controller/model_controller.js";

class ModelRouter{
    // propiétés
    private router = express.Router();

    // méthodes
    public getRoutes = () => {
        this.router.get("/", new ModelController().index);
        this.router.get("/:id", new ModelController().one);
        this.router.post("/", new ModelController().insert);

        return this.router;
    }
}

export default ModelRouter;