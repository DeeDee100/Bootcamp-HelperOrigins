//3 - Crie uma função que receba uma lista (valide se é numérica) e retorne outra contendo:
// a) O maior valor;
// b) O menor valor;
// c) O valor médio.
// Demonstre essa função com o paradigma funcional e imperativo

let mixedList = [1,2,3,4,5, 'Orange'];
let numbersList = [1,2,3,4,5];

/**
 * 
 * Calcula e retorna o valor medio e o maior e menor valor de uma lista dada.
 * @param list Lista a ser calculado maior e menor valor e valor médio. 
 * @returns Retorna uma list com o maior e menor valor e o valor médio, nessa ordem
 */
function getMaxMinAverage(list: Array<any>): Array<number> | string{
	if (list.length == 0){
		return "Lista vazia";
	}

	let newList:Array<number> = [];
	let sum: number = 0;

	for (let number of list){
		if (typeof(number) == "number"){
			newList.push(number);
			sum += number;
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

console.log(getMaxMinAverage(mixedList));
console.log(getMaxMinAverage(numbersList));
