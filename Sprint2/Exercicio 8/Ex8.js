class Cientista {
    constructor(id, name, bio, invencao) {
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.invencao = [invencao];
    }
    pegaBio() {
        return this.bio;
    }
    pegaNome() {
        return this.name;
    }
    pegaInvencao() {
        return this.invencao;
    }
}
export class FabricaDeCientista {
    static create(id, name, bio, invencao) {
        return new Cientista(id, name, bio, invencao);
    }
}
//# sourceMappingURL=Ex8.js.map