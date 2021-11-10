// Crie uma classe que receba uma lista (númerica ou não) e retorne outra contendo:
//  a) O maior valor;
//  b) O menor valor;
//  c) O valor médio.
// Demonstre essa classe com o paradigma funcional e imperativo

const listaNumeros = [1,2,6,9,4];
const listaNumeroMisto = [1,2,6,"lul", 9];

class Valores{
	lista: Array<any>;

	constructor(lista: Array<any>){
		this.lista = lista
	}

	maioMenorMedia(){
		let novaLista: Array<number> = [];
		for(let numero of this.lista){
			if(typeof(numero) === 'number'){
				novaLista.push(numero);
			}
			else{
				return false;
			}
		}
		novaLista.sort();
		const length: number = novaLista.length;
		const soma: number = novaLista.reduce((numero1, numero2) => numero1 + numero2, 0);
		const maior: number = novaLista.pop();
		const menor: number = novaLista.shift();
		const media: number = soma / length;

		return [maior, menor, media];
	}
}