
import type User from "../model/user.js";
import  type Role from "../model/role.js";
import MySQLService from "../service/mysql_service.js";
import RolesRepository from "./roles_repository.js";
import { UpdateResult } from "mongodb";

class UserRepository {
	// nom de la table en SQL
	private table = "user";

	// récuperer tous les enregistrements
	// async crée une promesse
	// la fonction renvoie un object unknown lorsqu'une erreur est renvoyée


	
	public selectAll = async (): Promise<User | unknown>=>  {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// requête SQL
		const sql = `
            SELECT 
                ${this.table}.*
            FROM
                ${process.env.MYSQL_DATABASE}.${this.table}
			LEFT JOIN
				${process.env.MYSQL_DATABASE}.role
			ON 
				role.id = ${this.table}.role_id
            ;
        `;
		

		//  exécuter la requête
		// try / catch : permet d'exécuter une instruction, si l'instruction échoue, une erreur est recupérée
		try {
			// récuperation des résultats de la requête
			const [results] = await connection.execute(sql);

			const result = (results as User[]).shift() as User;

			for(let i = 0; i < (results as User[]).length; i++){
				const result = (results as User[])[i];
				//  console.log(result);
				result.role = (await new RolesRepository().selectOne({
					id: result.role_id,
				})) as Role;
			}
			return results;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};

	public selectOne = async(data: Partial<User>,): Promise<User | unknown>=>  {
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

			const result = (results as User[]).shift() as User;

			result.role = (await new RolesRepository().selectOne({
				id: result.role_id,
			})) as Role;

			return result;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};

	public insert = async (
		data: Partial<User>,
	): Promise<User | unknown> => {
		
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
				:firstname,
				:lastname,
				:email,
				:phonenumber,
				:password,
				:role_id
				)
			;
        `;
		//  exécuter la requête
		// try / catch : permet d'exécuter une instruction, si l'instruction échoue, une erreur est recupérée
		try {
			// créer une transaction SQL
			// connection.beginTransaction();
			
			// récuperation des résultats de la requête
			// results représente le premier indice d'un array envoyer
			const [results] = await connection.execute(sql, data);
			
			// connection.commit();

			return results;
		} catch (error) {
			// connection.rollback();
			// si la requête à échouer
			return error;
		}
	};

	public update = async (
		data: Partial<User>,
	): Promise<User | unknown> => {
		
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// requête SQL
		// créer une variable de requête SQL en préfixant le nom d'une variable par :
		const sql = `
			UPDATE 
				${process.env.MYSQL_DATABASE}.${this.table}
			SET 
				${this.table}.firstname = :firstname,
				${this.table}.lastname = :lastname,
				${this.table}.email = :email,
				${this.table}.phonenumber = :phonenumber,
				${this.table}.password = :password,
				${this.table}.roles_id = :roles_id
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

	public delete = async (
		data: Partial<User>,
	): Promise<User | unknown> => {
		
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

	// Selectionner un utilisateur par son email
    public selectOneByEmail = async (
        email: string,
    ): Promise<User | unknown> => {
        // connexion au serveur MySQL
        const connection = await new MySQLService().connect();

        // requête SQL
        const sql = `
        SELECT 
            ${this.table}.*
        FROM
            ${process.env.MYSQL_DATABASE}.${this.table}
            WHERE
            ${this.table}.email = :email

        `;
        // exécuter la requête
        // try / catch: permet d'exécuter une instruction, si l'instruction échoue, une erreur est récupérée

        try {
            // récuperer les résultats de la requête

            // results représente le premier indice du array renvoyé
            // requêtes préparées avec des varibales de requêtes sql permettent d'éviter les injections sql
            // dat     permet de définir une valeur aux variables de requêtes
            const [results] = await connection.execute(sql, {
                email: email,
            });

            // récupérer le premier indice d'un array

            const result = (results as User[]).shift() as User;
            // si la requête a réussie

            // composition permet d'associer la propriété d'un objet à un autre objet
            // result.role = (await new RoleRepository().selectOne({
            //     id: result.role_id,
            // })) as Role;

            return result;
        } catch (error) {
            // si la requête a échouée
            return error;
        }
    };

}

export default UserRepository;
