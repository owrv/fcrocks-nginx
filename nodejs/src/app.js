import express from 'express';
import routes from './routes.js';
class App {
    constructor() {
        this.server = express();
        this.server.set('view engine', 'ejs');
        this.server.set('views', './views');
        this.routes();
    }
    routes() {
        this.server.use(routes);
    }
}
export default new App().server;