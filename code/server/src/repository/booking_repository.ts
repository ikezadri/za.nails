import TypesRepository from "../repository/type_repository.js";
import type Booking from "../model/booking.js";
import MySQLService from "../service/mysql_service.js";
import type Type from "../model/type.js";

class BookingRepository {
	// nom de la table en SQL
	private table = "booking";

	// récuperer tous les enregistrements
	// async crée une promesse
	// la fonction renvoie un object unknown lorsqu'une erreur est renvoyée

	public selectAll = async (): Promise<Booking[] | unknown> => {
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

			for (let i = 0; i < (results as Booking[]).length; i++) {
				const result = (results as Booking[])[i];
				// console.log(result);

				result.type = (await new TypesRepository().selectOne({
					id: result.type_id,
				})) as Type;
			}

			return results;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};

	public selectOne = async (
		data: Partial<Booking>,
	): Promise<Booking | unknown> => {
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

			const result = (results as Booking[]).shift() as Booking;

			result.type = (await new TypesRepository().selectOne({
				id: result.type_id,
			})) as Type;

			return result;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};

	// créer un enregistrement
	public insert = async (
		data: Partial<Booking>,
	): Promise<Booking | unknown> => {
		
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// requête SQL
		// créer une variable de requête SQL en préfixant le nom d'une variable par :
		const sql = `
			INSERT INTO
				${process.env.MYSQL_DATABASE}.${this.table}
			VALUE 
				(
				NULL,
				:date_time,
				:type,
				:type_id
				)
			;
        `;
		//  exécuter la requête
		// try / catch : permet d'exécuter une instruction, si l'instruction échoue, une erreur est recupérée
		try {
			// créer une transaction SQL
			connection.beginTransaction();

			// récuperation des résultats de la requête
			// results représente le premier indice d'un array envoyer
			const [results] = await connection.execute(sql, data);
			connection.commit();

			return results;
		} catch (error) {
			connection.rollback();
			// si la requête à échouer
			return error;
		}
	};

	public update = async (
		data: Partial<Booking>,
	): Promise<Booking | unknown> => {
		
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// requête SQL
		// créer une variable de requête SQL en préfixant le nom d'une variable par :
		const sql = `
			UPDATE 
				${process.env.MYSQL_DATABASE}.${this.table}
			SET 
				${this.table}.date_time = :date_time,
				${this.table}.types = :types,
				${this.table}.types_id = :types_id
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

			return results;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};

	// supprimer un enregristrement
	public delete = async (
		data: Partial<Booking>,
	): Promise<Booking | unknown> => {
		
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// requête SQL
		// créer une variable de requête SQL en préfixant le nom d'une variable par :
		const sql = `
			DELETE FROM
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

			return results;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};
}

export default BookingRepository;