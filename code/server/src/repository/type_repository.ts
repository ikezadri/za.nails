import type Model from "../model/model.js";
import type Type from "../model/type.js";
import MySQLService from "../service/mysql_service.js";
import ModelRepository from "./model_repository.js";

class TypesRepository {
	// nom de la table en SQL
	private table = "type";

	// récuperer tous les enregistrements
	// async crée une promesse
	// la fonction renvoie un object unknown lorsqu'une erreur est renvoyée

	public selectAll = async (): Promise<Type[] | unknown> => {
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

	public selectOne = async (data: Partial<Type>): Promise<Type | unknown> => {
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
			const result = (results as Type[]).shift() as Type;
			return result;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};

	public selectInList = async (list: string): Promise<Type[] | unknown> => {
        // Connexion au serveur MySQL
        const connection = await new MySQLService().connect();

        // Requête SQL
        const sql = `
            SELECT
                ${this.table}.*
            FROM
                ${process.env.MYSQL_DATABASE}.${this.table}
            WHERE
                ${this.table}.id IN (${list})
            ;
        `;

        // Exécuter la requête
        // try / catch: permet d'exécuter une instruction, si l'instruction échoue, une erreur est récupérer
        try {
            // Récupérer les resultats de la requete
            // results représente le premier indice du array renvoyé
            const [results] = await connection.execute(sql);

            // Si la requête à réussi
            return results;
        } catch (error) {
            // Si la requete à échoué
            return error;
        }
    };

}

export default TypesRepository;