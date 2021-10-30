let listazin = [1, 2, 3, 4, 5, "luls"];
function maiorValor(lista) {
    let newLista = [...lista];
    newLista.sort();
    return newLista[(newLista.length) - 1];
}
function menorValor(lista) {
    let newLista = [...lista];
    newLista.sort();
    return newLista[0];
}
function valorMedio(lista) {
    let newLista = [...lista];
    let soma = newLista.reduce((a, b) => a + b, 0);
    let resultado = soma / newLista.length;
    return resultado;
}
function valores(lista) {
    if ((lista.every(item => typeof (item) === "number")) == false) {
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
console.log(valores(listazin));
//# sourceMappingURL=ex3%20funcional.js.map