
interface Person{
	id: number;
	name: string;
	bio: string;
}

let list: Array<Person> = [
	{"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
	{"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
	{"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
	{"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."},
	{"id" : 7, "name": "Dee Dee", "bio": "Bio aqui luls"}
];


class Informations{
	public lista: Array <Person>;

	constructor(lista: Array<Person>){
		this.lista = lista;
	}

	public getBio(id: number): string{
		for (let person of this.lista){
			if( person.id == id){
				return person.bio;
			}
		}
	}

	public getName(id: number): string{
		for (let person of this.lista){
			if (person.id == id){
				return person.name;
			}
		}
	}

	public change(id:number, field: 'bio | name', change: string): boolean{
		for(let person of this.lista){
			if (person.id == id){
				person[field] = change;
				return true;
			}
		}
		return false;
	}

	public delete(id:number): boolean{
		for (let person of this.lista){
			if(person.id == id){
				let index: number = this.lista.indexOf(person);
				this.lista.splice(index,1);
				return true
			}
		}
		return false
	}
}