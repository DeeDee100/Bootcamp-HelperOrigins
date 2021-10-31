let lista = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
function getNameFuncional(id) {
    var _a;
    return ((_a = lista.find(item => item.id == id)) === null || _a === void 0 ? void 0 : _a.name) || "ID Não Encontrado";
}
function getBioFuncional(id) {
    var _a;
    return ((_a = lista.find(item => item.id == id)) === null || _a === void 0 ? void 0 : _a.bio) || "ID Não Encontrado";
}
function deleteFuncional(id) {
    const novaLista = lista.filter(item => item.id != id);
    return novaLista;
}
function updateFuncional(id, campo, mudanca) {
    let novaLista = [...lista];
    const index = novaLista.findIndex(item => item["id"] == id);
    if (novaLista[index]) {
        novaLista[index][campo] = mudanca;
        return novaLista;
    }
    else {
        return "ERROR: Mudança não executada";
    }
}
//# sourceMappingURL=ex2%20funcional.js.map