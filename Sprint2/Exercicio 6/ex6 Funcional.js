let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." },
    { "id": 7, "name": "Dee Dee", "bio": "Bio aqui luls" }
];
class Informacao {
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
let test = new Informacao(lista);
console.log(test.mudarCampo(1, 'name', "NOME"));
console.log(lista);
//# sourceMappingURL=ex6%20Funcional.js.map