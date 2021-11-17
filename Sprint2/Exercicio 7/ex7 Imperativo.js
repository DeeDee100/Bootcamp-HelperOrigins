let lista = [1, 2, 3, 4, 5];
class ValoresArray {
    constructor(lista) {
        this.lista = lista;
    }
    maiorNumero(lista) {
        return lista.sort().pop();
    }
    menorNumero(lista) {
        return lista.sort().shift();
    }
    media(lista) {
        let novaLista = lista;
        const soma = novaLista.reduce((numero1, numero2) => numero1 + numero2, 0);
        return (soma / novaLista.length) | 0;
    }
    maioMenorMedia() {
        let novaLista = [];
        for (let numero of this.lista) {
            if (typeof (numero) === 'number') {
                novaLista.push(numero);
            }
            else {
                return `Item: "${numero}" não é um número`;
            }
        }
        const maior = this.maiorNumero(novaLista);
        const menor = this.menorNumero(novaLista);
        const media = this.media(novaLista);
        return [maior, menor, media];
    }
}
let teste1 = new ValoresArray(lista);
console.log(teste1.maioMenorMedia());
//# sourceMappingURL=ex7%20Imperativo.js.map