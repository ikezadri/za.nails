import type Contact from "../model/contact.js";
import MongoDBService from "../service/mongodb_service.js";

class ContactRepository {
	// nom de la collection
	private collection = "contact";

	// récuperer tous les documents
	public selectAll = () => {
		// connexion au serveur MongoDB
		const connection = new MongoDBService().connect();
        
		// sélectionner la collection
		const collection = connection.collection(this.collection);

		//  récuperer les documents
		return collection.find().toArray();
        
	};

	public insert = async (data: Partial<Contact>):Promise<Contact[] | unknown> => {
		const connection = await new MongoDBService().connect();

		// Requête MongoDB
		const mongoQuery = async () => {
			return await connection.collection(this.collection).insertOne({
				email: data.email,
				subject: data.subject,
				message: data.message,
			});
		};

		try {
			const [results] = [await mongoQuery()];
			return results;
		} catch (error) {
			return error;
		}
	};
}

export default ContactRepository;
