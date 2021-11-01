let listaMista = [1, 2, 3, 4, 5, "luls"];
let listaNumeros = [1, 2, 3, 4, 5,];
/**
 *
 * @param lista lista a ser calculado o maior valor presente na lista
 * @returns Maior valor
 */
function maiorValor(lista) {
    let newLista = [...lista];
    newLista.sort();
    return newLista[(newLista.length) - 1];
}
/**
 * @name menorValor
 * @abstract Retorna o menor valor da lista
 * @param lista lista a ser calculado o menor valor presente na lista
 * @returns Menor valor
 */
function menorValor(lista) {
    let newLista = [...lista];
    newLista.sort();
    return newLista[0];
}
/**
 *
 * @param lista lista a ser calculado o valor médio
 * @returns valor médio
 */
function valorMedio(lista) {
    let newLista = [...lista];
    let soma = newLista.reduce((numero1, numero2) => numero1 + numero2, 0);
    let resultado = soma / newLista.length;
    return resultado;
}
/**
 *
 * @param lista Lista a ser calculado maior e menor valor e valor médio.
 * @returns Uma lista contendo maior valor, menor valor e o valor médio, nessa ordem.
 */
function valores(lista) {
    if (lista.length == 0) {
        return "lista vazia";
    }
    else if ((lista.every(item => typeof (item) === "number")) == false) {
        return "Item não é um número";
    }
    else {
        const maior = maiorValor(lista);
        const menor = menorValor(lista);
        const medio = valorMedio(lista);
        const result = [maior, menor, medio];
        return result;
    }
}
console.log(valores(listaMista));
console.log(valores(listaNumeros));
//# sourceMappingURL=ex3%20funcional.js.map