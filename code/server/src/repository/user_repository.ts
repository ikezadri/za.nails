import type Role from "../model/role.js";
import type User from "../model/user.js";
import MySQLService from "../service/mysql_service.js";
import RoleRepository from "./role_repository.js";

class UserRepository {
	// nom de la table SQL
	private table = "user";

	// récuprérer tous les enregistrements
	public selectAll = async (): Promise<User[] | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// SELECT role.* FROM reiki_dev.role;
		const sql = `
		SELECT
		${this.table}.*
	    FROM
		${process.env.MYSQL_DATABASE}.${this.table}
	    LEFT JOIN
		${process.env.MYSQL_DATABASE}.role
	    ON
		role.id = ${this.table}.role_id;
        `;

		//exécuter la requête
		// try / catch permet d'exécuter une instruction, si l'instruction échoue, une erreur est récupérée
		try {
			// récupérer les résultats de la requête
			const [results] = await connection.execute(sql);

			// composition permet d'associer un objet à une propirété d'un autre objet
			for (let i = 0; i < (results as User[]).length; i++) {
				// boucler sur les resultats
				const result = (results as User[])[i];
				// console.log(result);
				result.role = (await new RoleRepository().selectOne({
					id: result.role_id,
				})) as Role;
			}

			// si la requête a réussie
			return results;
		} catch (error) {
			// si la requête a échouée
			return error;
		}
	};

	// récupérer un enregistrement par sa clé primaire
	// Partial permet de définir des proprietes optionnelles
	public selectOne = async (data: Partial<User>): Promise<User | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// SELECT role.* FROM reiki_dev.category WHERE role.idCategory =1 ;
		// créer une variable de requete SQL en préfixant le nom d'une variable par :
		const sql = `
		    SELECT
		       ${this.table}.*
	        FROM
		        ${process.env.MYSQL_DATABASE}.${this.table}
	        LEFT JOIN
		        ${process.env.MYSQL_DATABASE}.role
	        ON
		        role.id = ${this.table}.role_id
            WHERE
                ${this.table}.id = :id
				;
                

             `;

		//exécuter la requête
		// try / catch permet d'exécuter une instruction, si l'instruction échoue, une erreur est récupérée
		try {
			// récupérer les résultats de la requête
			// results représente le premier indice de la requete
			const [results] = await connection.execute(sql, data);

			const result = (results as User[]).shift() as User;

			result.role = (await new RoleRepository().selectOne({
				id: result.role_id,
			})) as Role;

			// si la requête a réussie
			return result;
		} catch (error) {
			// si la requête a échouée
			return error;
		}
	};

	public insert = async (data: Partial<User>): Promise<User | unknown> => {
		// console.log("données reçues",data);
		
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();
		// console.log("Connexion mySQL réussie");
		
		// requête SQL
		// créer une variable de requete SQL en préfixant le nom d'une variable par :
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
					:role_id
				)
			;	
         `;
		// console.log("SQL préparée", sql);
		// console.log("Paramètres de la requête", data);
		
		
		//exécuter la requête
		// try / catch permet d'exécuter une instruction, si l'instruction échoue, une erreur est récupérée
		try {
			// récupérer les résultats de la requête
			// results représente le premier indice de la requete
			// console.log("debut transaction");
			
			const [results] = await connection.execute(sql, data);
			// console.log("resultat final", results);
			
			
			// si la requête a réussie
			return results;
		} catch (error) {
			// console.error("Erreur dans la requête", error);
			// console.error("nsm", error instanceof Error ? error.message : "Erreur inconnue");
			// console.error("nsm2", error instanceof Error ? error.stack : "pas de stack");
			// si la requête a échouée
			return error;
		}
		
	}; 

	public update = async (
		data: Partial<User>,
	): Promise<User | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// créer une variable de requete SQL en préfixant le nom d'une variable par :
		const sql = `
              UPDATE
			    ${process.env.MYSQL_DATABASE}.${this.table}
			 SET
			   ${this.table}.firstname = :firstname,
			   ${this.table}.lastname = :lastname,
			   ${this.table}.email = :email,
			   ${this.table}.phone_number = :phone_number,
			   ${this.table}.password = :password,
			   ${this.table}.role_id = :role_id
             WHERE
			   ${this.table}.id = :id
			;	
         `;
		// console.log("SQL préparée", sql);
		// console.log("Paramètres de la requête", data);
		//exécuter la requête
		// try / catch permet d'exécuter une instruction, si l'instruction échoue, une erreur est récupérée
		try {

            // creer une transaction
			//connection.beginTransaction();

			// récupérer les résultats de la requête
			// results représente le premier indice de la requete
			const [results] = await connection.execute(sql, data);

			// valider la transaction
			//connection.commit();

			// si la requête a réussie
			return results;
		} catch (error) {

             // si la requête a échouée
            //connection.rollback();

			// si la requête a échouée
			return error;
		}
	};

	public delete = async (
		data: Partial<User>,
	): Promise<User | unknown> => {
		// connexion au serveur MySQL
		const connection = await new MySQLService().connect();

		// requête SQL
		// créer une variable de requete SQL en préfixant le nom d'une variable par :
		const sql = `
              DELETE FROM
			    ${process.env.MYSQL_DATABASE}.${this.table}
             WHERE
			   ${this.table}.id = :id
			;	
         `;

		//exécuter la requête
		// try / catch permet d'exécuter une instruction, si l'instruction échoue, une erreur est récupérée
		try {

        

			// récupérer les résultats de la requête
			// results représente le premier indice de la requete
			const [results] = await connection.execute(sql, data);

			

			// si la requête a réussie
			return results;
		} catch (error) {
             

			// si la requête a échouée
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
            ${this.table}.email = :email;

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