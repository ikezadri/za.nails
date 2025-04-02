import type Role from "../model/role.js";
import MySQLService from "../service/mysql_service.js";

class RoleRepository {
	// nom de la table SQL
	private table = "role";

	// récuprérer tous les enregistrements
	public selectAll = async (): Promise<Role[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// SELECT role.* FROM reiki_dev.role;
		const sql = `
            SELECT
                ${this.table}.*
            FROM
                ${process.env.MYSQL_DATABASE}.${this.table};
             `;

		//exécuter la requête
		// try / catch permet d'exécuter une instruction, si l'instruction échoue, une erreur est récupérée
		try {
			// récupérer les résultats de la requête
			// results représente le premier indice de la requete
			const [results] = await connection.execute(sql);

			

			// si la requête a réussie
			return results;
		} catch (error) {
			// si la requête a échouée
			return error;
		}
	};

	// récupérer un enregistrement par sa clé primaire
	// Partial permet de définir des proprietes optionnelles
	public selectOne = async (data: Partial<Role>): Promise<Role | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// SELECT role.* FROM reiki_dev.role WHERE role.idRole =1 ;
		// créer une variable de requete SQL en préfixant le nom d'une variable par :
		const sql = `
            SELECT
                ${this.table}.*
            FROM
                ${process.env.MYSQL_DATABASE}.${this.table}
            WHERE
                ${this.table}.id = :id;
                

             `;

		//exécuter la requête
		// try / catch permet d'exécuter une instruction, si l'instruction échoue, une erreur est récupérée
		try {
			// récupérer les résultats de la requête
			// results représente le premier indice de la requete
			// requete préparés avec des variables de requete SQL permettent d'eviter des injections SQL
			// data permet de definir une variable aux variables de requetes SQL
			const [results] = await connection.execute(sql, data);
			// console.log((results as Role[]).shift());

			// si la requête a réussie
			return (results as Role[]).shift();
		} catch (error) {
			// si la requête a échouée
			return error;
		}
	};
}

export default RoleRepository;
