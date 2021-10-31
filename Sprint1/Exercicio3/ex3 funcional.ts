let listazin = [1,2,3,4,5, "luls"];
let lista2 = [1,2,3,4,5,];

/**
 * 
 * @param lista lista a ser calculado o maior valor presente na lista
 * @returns Maior valor
 */
function maiorValor(lista: Array<any>): number{
	let newLista: Array<number> = [...lista];
	newLista.sort();
	return newLista[(newLista.length) - 1]
}

/**
 * 
 * @param lista lista a ser calculado o menor valor presente na lista
 * @returns Menor valor
 */
function menorValor(lista: Array<number>): number{
	let newLista: Array<number> = [...lista];
	newLista.sort();
	return newLista[0];
}

/**
 * 
 * @param lista lista a ser calculado o valor médio
 * @returns valor médio
 */
function valorMedio(lista: Array<number>): number{
	let newLista: Array<number> = [...lista];
	let soma: number = newLista.reduce((numero1, numero2) => numero1 + numero2, 0);
	let resultado: number = soma / newLista.length;
	return resultado;
}

/**
 * 
 * @param lista Lista a ser calculado maior e menor valor e valor médio.
 * @returns Uma lista contendo maior valor, menor valor e o valor médio, nessa ordem.
 */
function valores(lista: Array<any>): string | Array<number>{
	if ((lista.every(item => typeof(item) === "number")) == false){
		return "Item não é um número";
	}
	else{
		const maior: number = maiorValor(lista);
		const menor: number = menorValor(lista);
		const medio: number = valorMedio(lista);
		const result: number[] = [maior, menor, medio];
		return result;
	}
}

console.log(valores(listazin));
console.log(valores(lista2));