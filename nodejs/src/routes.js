import { Router } from "express";
import people from "./app/controllers/people.js";
const routes = new Router();
routes.get('/', people.store);
export default routes;