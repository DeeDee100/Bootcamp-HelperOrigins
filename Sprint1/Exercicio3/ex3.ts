//3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:
// a) O maior valor;
// b) O menor valor;
// c) O valor médio.
// Demonstre essa função com o paradigma funcional e imperativo

let listin = [1,2,3,4,5, 'Orange'];
let lista1 = [1,2,3,4,5];

function getValues(lista: Array<any>): Array<number> | string{
	let newList = [];
	let sum: number = 0;
	for (let i in lista){
		if (typeof(lista[i]) == "number"){
			newList.push(lista[i]);
			sum += newList[i];
		}
		else{
			return "ERRO: ITEM NÃO É UM NUMERO";
		}
	}
	newList.sort();
	const length: number = newList.length;
	const big: number = newList[(length - 1)];
	const small: number = newList[0];
	const medium: number =  sum / length;
	const result: number[] = [big, small, medium];
	return result;
}

console.log(getValues(listin));
console.log(getValues(lista1));
