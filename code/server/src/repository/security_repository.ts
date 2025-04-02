import type User from "../model/user.js";
import MySQLService from "../service/mysql_service.js";

class SecurityRepository {
    // nom de la table SQL
    private table = "user";

    // enregister un utilisateur
    public register = async (data:Partial<User>): Promise<User | unknown> => {
        // connexion au serveur MySQL
        const connection = await new MySQLService().connect();

        // requête SQL
        // SELECT role.* FROM reiki_dev.role;
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

        //exécuter la requête
        // try / catch permet d'exécuter une instruction, si l'instruction échoue, une erreur est récupérée
        try {
            // récupérer les résultats de la requête
            // results représente le premier indice de la requete
            const [results] = await connection.execute(sql,data);



            // si la requête a réussie
            return results;
        } catch (error) {
            // si la requête a échouée
            return error;
        }
    };





}

export default SecurityRepository;
