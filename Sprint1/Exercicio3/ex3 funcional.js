let listaMista = [1, 2, 3, 4, 5, "luls"];
let listaNumeros = [1, 2, 3, 4, 5,];
/**
 *
 * @param lista lista a ser calculado o maior valor presente na lista
 * @returns Maior valor
 */
function maiorValor(lista) {
    let novaLista = [...lista];
    novaLista.sort();
    return novaLista[(novaLista.length) - 1] || 0;
}
/**
 * @name menorValor
 * @abstract Retorna o menor valor da lista
 * @param lista lista a ser calculado o menor valor presente na lista
 * @returns Menor valor
 */
function menorValor(lista) {
    let novaLista = [...lista];
    novaLista.sort();
    return novaLista[0] || 0;
}
/**
 *
 * @param lista lista a ser calculado o valor médio
 * @returns valor médio
 */
function valorMedio(lista) {
    let novaLista = [...lista];
    let soma = novaLista.reduce((numero1, numero2) => numero1 + numero2, 0);
    let resultado = soma / (novaLista.length || 1);
    return resultado;
}
/**
 *
 * @param lista Lista a ser calculado maior e menor valor e valor médio.
 * @returns Uma lista contendo maior valor, menor valor e o valor médio, nessa ordem.
 */
function maxMinMedia(lista) {
    if (lista.length == 0) {
        return "lista vazia";
    }
    else if (!lista.every(item => typeof (item) === "number")) {
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
console.log(maxMinMedia(listaMista));
console.log(maxMinMedia(listaNumeros));
//# sourceMappingURL=ex3%20funcional.js.map