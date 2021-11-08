
interface Person{
	id: number;
	name: string;
	bio: string;
}

let lista: Array<Person> = [
	{"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
	{"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
	{"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
	{"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."},
	{"id" : 7, "name": "Dee Dee", "bio": "Bio aqui luls"}
];

class Informacao{
	lista: Array<Person>;

	constructor(lista: Array<Person>){
		this.lista = lista;
	}

	pegaPessoa(id: number){
		return this.lista.find(pessoa => pessoa.id == id);
	}

	pegaNome(id: number): string | boolean{
		return this.pegaPessoa(id)?.name || false;
	}

	pegaBio(id: number): string | boolean{
		return this.pegaPessoa(id)?.bio || false;
	}

	deletaPessoa(id: number){
		return this.lista.filter( pessoa => pessoa.id != id);
	}

	mudarCampo(id: number, campo: 'name'| 'bio', mudanca: string): Array<Person> | boolean{
		let novaLista:  Array<Person> = this.lista.map((pessoa: Person) => ({...pessoa}))
		let index = this.lista.indexOf(this.pegaPessoa(id));
		if (novaLista[index]){
			novaLista[index][campo] = mudanca;
			return novaLista;
		}
		return false;
	}
}

let test = new Informacao(lista);

console.log(test.mudarCampo(1, 'name', "NOME"));
console.log(lista);