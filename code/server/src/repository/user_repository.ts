
import type User from "../model/user.js";
import  type Roles from "../model/roles.js";
import MySQLService from "../service/mysql_service.js";
import RolesRepository from "./roles_repository.js";

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
            ;
        `;
		

		//  exécuter la requête
		// try / catch : permet d'exécuter une instruction, si l'instruction échoue, une erreur est recupérée
		try {
			// récuperation des résultats de la requête
			const [results] = await connection.execute(sql);

			const result = (results as User[]).shift() as User;

			result.roles = (await new RolesRepository().selectOne({
				id: result.roles_id,
			})) as Roles;

			for(let i = 0; i < (results as User[]).length; i++){
				const result = (results as User[])[i];
				// console.log(result);
				result.roles = (await new RolesRepository().selectOne({
					id: result.roles_id,
				})) as Roles;
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
			return results;
		} catch (error) {
			// si la requête à échouer
			return error;
		}
	};
}

export default UserRepository;
