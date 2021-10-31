//3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:
// a) O maior valor;
// b) O menor valor;
// c) O valor médio.
// Demonstre essa função com o paradigma funcional e imperativo
let listin = [1, 2, 3, 4, 5, 'Orange'];
let lista1 = [1, 2, 3, 4, 5];
function getValues(lista) {
    let newList = [];
    let sum = 0;
    for (let i in lista) {
        if (typeof (lista[i]) == "number") {
            newList.push(lista[i]);
            sum += newList[i];
        }
        else {
            return "ERRO: ITEM NÃO É UM NUMERO";
        }
    }
    newList.sort();
    const length = newList.length;
    const big = newList[(length - 1)];
    const small = newList[0];
    const medium = sum / length;
    const result = [big, small, medium];
    return result;
}
console.log(getValues(listin));
console.log(getValues(lista1));
//# sourceMappingURL=ex3.js.map