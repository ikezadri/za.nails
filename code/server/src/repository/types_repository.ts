import type Types from "../model/type.js";
import MySQLService from "../service/mysql_service.js";

class TypesRepository {
	// nom de la table en SQL
	private table = "types";

	// récuperer tous les enregistrements
	// async crée une promesse
	// la fonction renvoie un object unknown lorsqu'une erreur est renvoyée

	public selectAll = async (): Promise<Types[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// requête SQL
		const sql = `
            SELECT 
                ${this.table}.*
            FROM
                ${process.env.MYSQL_DATABASE}.${this.table}
            ;
        `;

		//  exécuter la requête
		// try / catch : permet d'exécuter une instruction, si l'instruction échoue, une erreur est recupérée
		try {
			// récuperation des résultats de la requête
			const [results] = await connection.execute(sql);
			return results;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};

	public selectOne = async (data: Partial<Types>): Promise<Types | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// requête SQL
		// SELECT roles.* FROM za_nails WHERE roles.id = 1;
		// créer une variable de requête SQL en préfixant le nom d'une variable par :
		const sql = `
            SELECT 
                ${this.table}.*
            FROM
                ${process.env.MYSQL_DATABASE}.${this.table}
			WHERE
				${this.table}.id = :id
            ;
        `;

		//  exécuter la requête
		// try / catch : permet d'exécuter une instruction, si l'instruction échoue, une erreur est recupérée
		try {
			// récuperation des résultats de la requête
			// results représente le premier indice d'un array envoyer
			const [results] = await connection.execute(sql, data);
			const result = (results as Types[]).shift() as Types;
			return result;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};
}

export default TypesRepository;
