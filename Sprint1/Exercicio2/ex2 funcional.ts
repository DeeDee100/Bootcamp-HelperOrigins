interface Person{
	id: number;
	name: string;
	bio: string;
}

let lista1: Array<Person> = [
	{"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
	{"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista1, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
	{"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
	{"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

function getPersonFuncional(lista1: Array<Person>, id: number): Person{
	return lista1.find(item => item.id == id)
}

function getNameFuncional(lista1: Array<Person>, id: number): string {
	return getPersonFuncional(lista1, id)?.name || "ID Não Encontrado";
}

function getBioFuncional(lista1: Array<Person>, id: number): string {
	return getPersonFuncional(lista1, id)?.bio || "ID Não Encontrado";
}

function deleteFuncional(lista1: Array<Person>, id: number): Array<Person>{
	return lista1.filter(item => item.id != id);
}

function updateFuncional(lista1: Array<Person>, id: number, campo: 'name' | 'bio', mudanca: string): Array<Person>{
	let novaLista:  Array<Person> = lista1.map( item =>{
		if (item.id == id){
			return {
				...item,
				name:mudanca || item.name,
				bio: mudanca || item.bio
			}
		}
		return item;
	});
	return novaLista;
}

console.log(getNameFuncional(lista1, 1));