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
}

export default ContactRepository;
