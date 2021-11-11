export class Informacao {
    constructor(lista) {
        this.lista = lista;
    }
    pegaPessoa(id) {
        return this.lista.find(pessoa => pessoa.id == id);
    }
    pegaNome(id) {
        var _a;
        return ((_a = this.pegaPessoa(id)) === null || _a === void 0 ? void 0 : _a.name) || false;
    }
    pegaBio(id) {
        var _a;
        return ((_a = this.pegaPessoa(id)) === null || _a === void 0 ? void 0 : _a.bio) || false;
    }
    deletaPessoa(id) {
        return this.lista.filter(pessoa => pessoa.id != id);
    }
    mudarCampo(id, campo, mudanca) {
        let novaLista = this.lista.map((pessoa) => (Object.assign({}, pessoa)));
        let index = this.lista.indexOf(this.pegaPessoa(id));
        if (novaLista[index]) {
            novaLista[index][campo] = mudanca;
            return novaLista;
        }
        return false;
    }
}
//# sourceMappingURL=ex6%20Funcional.js.map