let listaMista = [1,2,3,4,5, "luls"];
let listaNumeros = [1,2,3,4,5,];

/**
 * 
 * @param lista lista a ser calculado o maior valor presente na lista
 * @returns Maior valor
 */
function maiorValor(lista: Array<any>): number{
	let novaLista: Array<number> = [...lista];
	novaLista.sort();
	return novaLista[(novaLista.length) - 1] || 0
}

/**
 * @name menorValor
 * @abstract Retorna o menor valor da lista
 * @param lista lista a ser calculado o menor valor presente na lista
 * @returns Menor valor
 */
function menorValor(lista: Array<number>): number{
	let novaLista: Array<number> = [...lista];
	novaLista.sort();
	return novaLista[0] || 0;
}

/**
 * 
 * @param lista lista a ser calculado o valor médio
 * @returns valor médio
 */
function valorMedio(lista: Array<number>): number{
	let novaLista: Array<number> = [...lista];
	let soma: number = novaLista.reduce((numero1, numero2) => numero1 + numero2, 0);
	let resultado: number = soma / (novaLista.length || 1);
	return resultado;
}

/**
 * 
 * @param lista Lista a ser calculado maior e menor valor e valor médio.
 * @returns Uma lista contendo maior valor, menor valor e o valor médio, nessa ordem.
 */
function maxMinMedia(lista: Array<any>): string | Array<number>{
	if (lista.length == 0 ){
		return "lista vazia"
	}
	else if (!lista.every(item => typeof(item) === "number")){
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

console.log(maxMinMedia(listaMista));
console.log(maxMinMedia(listaNumeros));