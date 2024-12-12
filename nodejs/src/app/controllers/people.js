import getNames from '../job/getNames.js';
import queries from '../../database/queries.js';
class PeopleController {
    async store(req, res) {
        const name = getNames.get();
        queries.myInsertQuery(name[0]);
        getNames.removeFirstName();
        const result = queries.mySelectQuery();
        result.then((peoples)=>{
            res.render('pagina', { dados: peoples });
        });
    }
}
export default new PeopleController();