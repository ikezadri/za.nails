import { log } from "node:console";
import type Model from "../model/model.js";
import MySQLService from "../service/mysql_service.js";

class ModelRepository {
	// nom de la table en SQL
	private table = "model";

	// récuperer tous les enregistrements
	// async crée une promesse
	// la fonction renvoie un object unknown lorsqu'une erreur est renvoyée

	public selectAll = async (): Promise<Model | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// console.log(connection);
		
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

	public selectOne = async (data: Partial<Model>): Promise<Model | unknown> => {
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

			const result = (results as Model[]).shift();

			return result;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};

	public insert = async (data: Partial<Model>): Promise<Model | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// console.log(data);

		// requête SQL
		// SELECT roles.* FROM za_nails WHERE roles.id = 1;
		// créer une variable de requête SQL en préfixant le nom d'une variable par :
		let sql = `
            INSERT INTO 
				${process.env.MYSQL_DATABASE}.${this.table}
            VALUE 
				(
					NULL,
					:name,
					:image,
					:type,
					:type_ids
				)
            ;
        `;
		//  exécuter la requête
		// try / catch : permet d'exécuter une instruction, si l'instruction échoue, une erreur est recupérée
		try {
			//créer une transaction SQL
			connection.beginTransaction();

			await connection.execute(sql, data);

			sql = ` 
			SET @id = LAST_INSERT_ID(); 
			`;
			await connection.execute(sql, data);

			// join> (NULL, @id, 1),(NULL, @id, 2),(NULL, @id, 	3)

			const values = data.type_ids
				?.split(",")
				.map((item) => `(${item}, @id)`)
				.join(",");

			sql = `
			INSERT INTO 
					${process.env.MYSQL_DATABASE}.type_model
			VALUES
					${values}
				;
			`;

			// récuperation des résultats de la requête
			// results représente le premier indice d'un array envoyer
			const [results] = await connection.execute(sql, data);
			//valider la transaction lorsque l'ensemble des requêtes d'une transaction ont réussi
			connection.commit();

			//si la requête a réussi
			return results;
		} catch (error) {
			//annuler l'ensemble des requêtes de la transaction si l'une des requêtes a échouer
			connection.rollback();
			// si la requête à échouer
			return error;
		}
	};

	public update = async (data: Partial<Model>): Promise<Model | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		
		// requête SQL
		// créer une variable de requête SQL en préfixant le nom d'une variable par :
		const sql = `
			UPDATE 
				${process.env.MYSQL_DATABASE}.${this.table}
			SET 
				${this.table}.name = :name,
				${this.table}.image = :image,
				${this.table}.type = :type,
				${this.table}.types_id = :types_ids
			WHERE
				${this.table}.id = :id
			;
        `;
		//  exécuter la requête
		// try / catch : permet d'exécuter une instruction, si l'instruction échoue, une erreur est recupérée
		try {
			//créer une transaction SQL
			connection.beginTransaction();

			const [results] = await connection.execute(sql, data);

			//valider la transaction lorsque l'ensemble des requêtes d'une transaction ont réussi
			connection.commit();

			return results;
		} catch (error) {
			//annuler l'ensemble des requêtes de la transaction si l'une des requêtes a échouer
			connection.rollback();
			// si la requête à échouer
			return error;
		}
	};

	public delete = async (data: Partial<Model>): Promise<Model | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// requête SQL
		// créer une variable de requête SQL en préfixant le nom d'une variable par :
		let sql = `
			DELETE FROM
				${process.env.MYSQL_DATABASE}.${this.table}
			WHERE
				${this.table}.id = :id
			;
        `;
		//  exécuter la requête
		// try / catch : permet d'exécuter une instruction, si l'instruction échoue, une erreur est recupérée
		try {
			connection.beginTransaction();
			// récuperation des résultats de la requête
			// results représente le premier indice d'un array envoyer
			await connection.execute(sql, data);

			sql = `
				DELETE FROM
					${process.env.MYSQL_DATABASE}.type_model
				WHERE
					type_model.model_id = :id
			`;

			const [results] = await connection.execute(sql, data);

			connection.commit();

			const values = data.type_ids
				?.split(",")
				.map((item) => `(NULL, @id, ${item})`)
				.join(",");

			sql = `
			INSERT INTO 
					${process.env.MYSQL_DATABASE}.type_model
			VALUES
					${values}
				;
			`;

			return results;
		} catch (error) {
			connection.rollback();
			// si la requête à échouer
			return error;
		}
	};
}

export default ModelRepository;
