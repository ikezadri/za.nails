import { log } from "node:console";
import type Model from "../model/model.js";
import MySQLService from "../service/mysql_service.js";
import { throws } from "node:assert";
import TypesRepository from "./type_repository.js";
import type Type from "../model/type.js";

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
                ${this.table}.*,
				GROUP_CONCAT(DISTINCT type.id) AS type_ids
            FROM
                ${process.env.MYSQL_DATABASE}.${this.table}
			JOIN
				 ${process.env.MYSQL_DATABASE}.type
			JOIN
				 ${process.env.MYSQL_DATABASE}.type_model
			ON
				type_model.model_id = ${this.table}.id
			AND
				type_model.type_id = type.id	
			GROUP BY
				${this.table}.id
            ;
        `;
		//  exécuter la requête
		// try / catch : permet d'exécuter une instruction, si l'instruction échoue, une erreur est recupérée
		try {
			// récuperation des résultats de la requête
			const [results] = await connection.execute(sql);
			for (let i = 0; i < (results as Model[]).length; i++) {
				const result = (results as Model[])[i];

				result.type = (await new TypesRepository().selectInList(
					result.type_ids,
				)) as Type[];
			}

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
		console.log(connection);
		
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
					:image
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
		// Connexion au serveur MySQL
		const connection = await new MySQLService().connect();
	
		try {
			// Démarrer une transaction
			await connection.beginTransaction();
	
			// Vérifier si le modèle existe
			const checkSql = `
				SELECT id FROM ${process.env.MYSQL_DATABASE}.${this.table}
				WHERE id = :id LIMIT 1;
			`;
			const [existingModel] = await connection.execute(checkSql, {
				id: data.id,
			});
	
			if (!Array.isArray(existingModel) || existingModel.length === 0) {
				throw new Error("Le modèle spécifié n'existe pas.");
			}
	
			// Mettre à jour les champs principaux du modèle
			const updateSql = `
				UPDATE ${process.env.MYSQL_DATABASE}.${this.table}
				SET 
					name = :name,
					image = :image
				WHERE
					id = :id;
			`;
			await connection.execute(updateSql, data);
	
			// Mettre à jour les relations avec les types si spécifiées
			if (data.type_ids) {
				// Supprimer les relations existantes
				const deleteTypeSql = `
					DELETE FROM ${process.env.MYSQL_DATABASE}.type_model
					WHERE model_id = :id;
				`;
				await connection.execute(deleteTypeSql, { id: data.id });
	
				// Ajouter les nouvelles relations
				const typeIds = data.type_ids.split(",");
				for (const typeId of typeIds) {
					const insertTypeSql = `
						INSERT INTO ${process.env.MYSQL_DATABASE}.type_model
						(type_id, model_id)
						VALUES (:typeId, :id);
					`;
					await connection.execute(insertTypeSql, {
						id: data.id,
						typeId,
					});
				}
			}
	
			// Valider la transaction
			await connection.commit();
	
			// Récupérer le modèle mis à jour
			return await this.selectOne({ id: data.id });
		} catch (error) {
			// Annuler la transaction en cas d'erreur
			await connection.rollback();
			return error;
		} finally {
			// Fermer la connexion
			await connection.release();
		}
	};
	
	public delete = async (data: Partial<Model>): Promise<Model | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// requête SQL
		// créer une variable de requête SQL en préfixant le nom d'une variable par :
		let sql = `
			DELETE FROM
				${process.env.MYSQL_DATABASE}.type_model
			WHERE
				type_model.model_id = :id
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
					${process.env.MYSQL_DATABASE}.${this.table}
				WHERE
					${this.table}.id = :id
				;
			`;

			const [results] = await connection.execute(sql, data);

			connection.commit();

			return results;
		} catch (error) {
			connection.rollback();
			// si la requête à échouer
			return error;
		}
	};
}

export default ModelRepository;
