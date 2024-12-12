import mysql from 'mysql2'

class Queries {
    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: 'root',
            password: 'root',
            database: 'my_db',
            insecureAuth: true
        });
    }
    mySelectQuery () {
        return new Promise((resolve, reject) => {
            this.connection.connect();
            this.connection.query('SELECT cod_people, des_name FROM peoples', function (error, result, fields) {
                if (error) {
                    console.log(`Erro ao tentar abrir uma nova conexão: ${err}`)
                } else {
                    return resolve(result);
                }
            });
        });
    }
    myInsertQuery(nameParam) {
        this.connection.connect();
        this.connection.query('INSERT INTO peoples (des_name) VALUES (?)', [nameParam],(error, results) => {
            if (error)
                console.log('Error in query insert: ', error)
        });
    };
};
export default new Queries;