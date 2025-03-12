import express, {type Request, type Response} from "express";
import CommentaryController from "../controller/commentary_controller.js";

class CommentaryRouter{
    // propiétés
    private router = express.Router();

    // méthodes
    public getRoutes = () => {
        this.router.get("/", new CommentaryController().index);
        this.router.get("/:id", new CommentaryController().one);

        return this.router;
    }
}

export default CommentaryRouter;