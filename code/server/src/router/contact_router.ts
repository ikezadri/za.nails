import express, {type Request, type Response} from "express";
import ContactController from "../controller/contact_controller.js";

class ContactRouter{
    // propiétés
    private router = express.Router();

    // méthodes
    public getRoutes = () => {
        this.router.get("/", new ContactController().index);

        return this.router;
    }
}

export default ContactRouter;