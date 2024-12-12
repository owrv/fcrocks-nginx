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
export default new Queries;