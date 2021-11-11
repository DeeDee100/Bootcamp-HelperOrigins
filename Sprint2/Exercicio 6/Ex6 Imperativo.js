export class Informations {
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
//# sourceMappingURL=Ex6%20Imperativo.js.map