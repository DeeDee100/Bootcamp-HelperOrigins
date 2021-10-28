//  Xa) Crie uma função que retorne a bio do id passado
//  Xb) Crie uma função que retorne o name do id passado
//  Xc) Crie uma função que apague um item da lista a partir de um id passado
//  d) Crie uma função que altere a bio ou o name a partir de um id passado
//  e) Demonstre todas as funções com o paradigma funcional e com o imperativo
var list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/**
 *
 * @param id id a ser encontrado
 * @returns Bio em caso de id válido | "Id não encontrado" em caso de id inválido
 */
function getBio(id) {
    var i;
    for (var index in list) {
        if (list[index].id == id) {
            i = id;
        }
    }
    if (typeof (i) == "undefined") {
        return "Id não encontrado";
    }
    else {
        return list[i].bio;
    }
}
/**
 *
 * @param id id a ser encontrado
 * @returns Nome em caso de id válido | "Id não encontrado" em caso de id inválido
 */
function getName(id) {
    var i;
    for (var index in list) {
        if (list[index].id == id) {
            i = id;
        }
    }
    if (typeof (i) == "undefined") {
        return "Id não encontrado";
    }
    else {
        return list[i].name;
    }
}
/**
 *
 * @param id Id a ser deletado
 * @returns "item deletado" em caso de id válido | "Id não encontrado" caso id inválido
 */
function delElement(id) {
    var i;
    for (var index in list) {
        if (list[index].id == id) {
            i = id;
        }
    }
    if (typeof (i) == "undefined") {
        return "Id não encontrado";
    }
    else {
        list.splice(i - 1, 1);
        return "Item deletado";
    }
}
/**
 *
 * @param id Id a ser mudado
 * @param name Boolean, true se for o item a ser mudado
 * @param bio Boolean, true se for o item a ser mudado
 * @param string Novo texto para o item
 */
function change(id, name, bio, string) {
    if (name === void 0) { name = false; }
    if (bio === void 0) { bio = false; }
    var i;
    for (var index in list) {
        if (list[index].id == id) {
            i = id;
        }
    }
    if (typeof (i) == "undefined") {
        return "Id não encontrado";
    }
    else {
        if (name == true) {
            list[i].name = string;
            return "Nome mudado";
        }
        else if (bio == true) {
            list[i].bio = string;
            return "Bio mudada";
        }
        else {
            return "Escolha entre bio ou name";
        }
    }
}
// console.log(list[1])
// console.log(change(1,true,false,"Hellows"))
// console.log(change(1,false,true,"Hellows, bio"))
// console.log(change(1,false,false,"Hellows"))
// console.log(list[1])
console.log(getName(1));
console.log(getName(8));
//# sourceMappingURL=ex2.js.map