// promise = éxecution d'un code asynchrone 
import mysql, { type PoolConnection } from 'mysql2/promise';

class MySQLService{
    // membres (propriétés et méthodes) statique = membre qui sont accessibles non pas avec un object mais directement par la classe 
    private static connection:PoolConnection; 

    // async permet de créer une fonction asynchrone 
    public connect  = async () => {
        // tester si une connexion n'exite pas 
        // await : à utiliser avec du code asynchrone (promesse)
        // créer un temps d'attente dans le code 
        // récuperer le contenu d'une promesse
        if (!MySQLService.connection){
             MySQLService.connection = await mysql.createPool({
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABSE,
                namedPlaceholders: true,
            })
                .getConnection();
        }
        // si la connexion existe 
        return MySQLService.connection;

    }
}

export default MySQLService;