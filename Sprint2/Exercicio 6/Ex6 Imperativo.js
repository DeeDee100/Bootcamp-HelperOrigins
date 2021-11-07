// Xa) Crie uma classe que retorne a bio do id passado
// Xb) Crie uma classe que retorne o name do id passado
// c) Crie uma classe que apague um item da lista a partir de um id passado
// Xd) Crie uma classe que altere a bio ou o name a partir de um id passado
// e) Demonstre todos os métodos com o paradigma funcional e com o imperativo
// Atenção: A escolha de fazer 1 classe ou N classes é de cada pessoa
let list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." },
    { "id": 7, "name": "Dee Dee", "bio": "Bio aqui luls" }
];
class Informations {
    constructor(lista) {
        this.lista = lista;
    }
    getBio(id) {
        for (let person of this.lista) {
            if (person.id == id) {
                return person.bio;
            }
        }
    }
    getName(id) {
        for (let person of this.lista) {
            if (person.id == id) {
                return person.name;
            }
        }
    }
    change(id, campo, mudanca) {
        for (let person of this.lista) {
            if (person.id == id) {
                person[campo] = mudanca;
                return true;
            }
        }
        return false;
    }
    delete(id) {
        for (let person of this.lista) {
            if (person.id == id) {
                let index = this.lista.indexOf(person);
                this.lista.splice(index, 1);
            }
        }
    }
}
//# sourceMappingURL=Ex6%20Imperativo.js.map