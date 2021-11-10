// Xa) Crie uma classe que retorne a bio do id passado
// Xb) Crie uma classe que retorne o name do id passado
// Xc) Crie uma classe que apague um item da lista a partir de um id passado
// Xd) Crie uma classe que altere a bio ou o name a partir de um id passado
// e) Demonstre todos os métodos com o paradigma funcional e com o imperativo
// Atenção: A escolha de fazer 1 classe ou N classes é de cada pessoa
import { lista } from "./aditionals.js";
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
    change(id, field, change) {
        for (let person of this.lista) {
            if (person.id == id) {
                person[field] = change;
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
                return true;
            }
        }
        return false;
    }
}
let lul = new Informations(lista);
console.log(lul.getBio(1));
//# sourceMappingURL=Ex6%20Imperativo.js.map