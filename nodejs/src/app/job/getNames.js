
class GetNames {
    _listNames = [];
    get() {
        if(this._listNames.length === 0) 
        {
            this.handle()
        }
        return this._listNames;
    }
    removeFirstName() {
        this._listNames.shift();
    }
    async handle() {
        const resServicoDados = await fetch('https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=1950');
        const dataServicoDados = await resServicoDados.json();
        const { res } = dataServicoDados[0];
        if (res) {
            res.map(item => this._listNames.push(item.nome));
        }
    }
};
export default new GetNames();