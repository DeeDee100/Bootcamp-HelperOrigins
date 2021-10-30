let listazin = [1,2,3,4,5, "luls"];

function maiorValor(lista: Array<any>): number{

	let newLista: Array<number> = [...lista];
		newLista.sort();
		return newLista[(newLista.length) - 1]
}


function menorValor(lista: Array<number>): number{
	let newLista: Array<number> = [...lista];
	newLista.sort();
	return newLista[0]
}

function valorMedio(lista: Array<number>): number{
	let newLista: Array<number> = [...lista];

	let soma: number = newLista.reduce((a, b) => a+b, 0);
	let resultado: number = soma / newLista.length;
	return resultado

}

function valores(lista: Array<any>): string | Array<number>{

	if ((lista.every(item => typeof(item) === "number")) == false){
		return "Item não é um número"
	}
	else{
		const maior: number = maiorValor(lista);
		const menor: number = menorValor(lista);
		const medio: number = valorMedio(lista);
		const result: number[] = [maior, menor, medio];
		return result
		

	}

}

console.log(valores(listazin));