import { MongoClient } from "mongodb";

class MongoDBService {
    // Connexion au service MongoDB
    public connect = () => {
        // URL de connexion : mongodb://<userpassword>:<host>:<port>/?authSource=admin
        const connection = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:27017/?authSource=admin`  ;

        // Connection au server
        const client = new MongoClient(connection);

        // Selectionner la base de données
        return client.db(process.env.MONGODB_DATABASE);
    };
}

export default MongoDBService;