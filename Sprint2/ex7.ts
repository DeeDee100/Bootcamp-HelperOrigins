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
}