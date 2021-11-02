let list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." },
    { "id": 7, "name": "Dee Dee", "bio": "Bio aqui luls" }
];
function getIndex(id) {
    for (let index = 0; index < list.length; index++) {
        if (list[index].id == id) {
            return index;
        }
    }
    return undefined;
}
/**
 *
 * @param id id a ser encontrado
 * @returns Bio em caso de id válido | "Id não encontrado" em caso de id inválido
 */
function getBio(id) {
    let index = getIndex(id);
    return list[index] ? list[index].bio : "Id não encontrado";
}
/**
 *
 * @param id id a ser encontrado
 * @returns Nome em caso de id válido | "Id não encontrado" em caso de id inválido
 */
function getName(id) {
    let index = getIndex(id);
    return list[index] ? list[index].name : "Id não encontrado";
}
/**
 *
 * @param id Id a ser deletado
 * @returns "item deletado" em caso de id válido | "Id não encontrado" caso id inválido
 */
function deleteElement(id) {
    let index = getIndex(id);
    if (list[index]) {
        const novo_index = Number(index);
        list.splice(novo_index, 1);
        return "Item deletado";
    }
    else {
        return "Id não encontrado";
    }
}
/**
 * Função para mudar nome e/ou bio de um elemento da lista
 * @param id Id a ser mudado
 * @param mudanca Objeto onde será passa a string no formato {name: "string", bio: "strign"}
 * @param name Boolean, true se for o item a ser mudado - Default = false
 * @param bio Boolean, true se for o item a ser mudado - Default = false
 */
function change(id, mudanca, name = false, bio = false) {
    let index = getIndex(id);
    if (list[index]) {
        if (name == true && bio == false) {
            list[index].name = mudanca.name;
            return "Nome mudado";
        }
        else if (bio == true && name == false) {
            list[index].bio = mudanca.bio;
            return "Bio mudada";
        }
        else if (bio == true && name == true) {
            list[index].bio = mudanca.bio;
            list[index].name = mudanca.name;
            return "Bio e nome mudados";
        }
        else {
            return "Escolha entre bio ou name";
        }
    }
    else {
        return "Id não encontrado";
    }
}
console.log(change(1, { name: "wqeuywequiyewqw", bio: "BIO" }, true, true));
console.log(change(2, { name: "?????", bio: "BIO" }, true, false));
console.log(change(2, { name: "?????", bio: "BIO" }, false, true));
console.log(list);
//# sourceMappingURL=ex2%20imperativo.js.map