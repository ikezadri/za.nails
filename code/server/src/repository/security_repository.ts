import type User from "../model/user.js";
import MySQLService from "../service/mysql_service.js";

class SecurityRepository {
	// nom de la table en SQL
	private table = "user";

	// enregristrer un utilisateur 
	public register = async (data:Partial<User>): Promise<User | unknown>=>  {

	
		
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// requête SQL
		const sql = `
            INSERT INTO 
                ${process.env.MYSQL_DATABASE}.${this.table}
			VALUE
				(
					NULL,
    				:firstname,
    				:lastname,
    				:email,
    				:phone_number,
   					:password,
    				2
				)
            ;
        `;
		

		//  exécuter la requête
		// try / catch : permet d'exécuter une instruction, si l'instruction échoue, une erreur est recupérée
		try {
			// récuperation des résultats de la requête
			const [results] = await connection.execute(sql, data);
			return results;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};

}

export default SecurityRepository;
