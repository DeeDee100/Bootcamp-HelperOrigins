interface Person{
	id: number;
	name: string;
	bio: string;
}

let lista: Array<Person> = [
	{"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
	{"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
	{"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
	{"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

function getNameFuncional(id: number): string {
	return lista.find(item => item.id == id)?.name || "ID Não Encontrado";
}

function getBioFuncional(id: number): string {
	return lista.find(item => item.id == id)?.bio || "ID Não Encontrado";
}

function deleteFuncional(id: number): Array<Person>{
	const novaLista: Array<Person> = lista.filter(item => item.id != id);
	return novaLista;
}

function updateFuncional(id: number, campo: 'name' | 'bio', mudanca: string): string | Array<Person>{
	let novaLista:  Array<Person> = [...lista];
	const index: number = novaLista.findIndex(item => item["id"] == id);
	if (novaLista[index]){
		novaLista[index][campo] = mudanca;
		return novaLista;
	}
	else{
		return "ERROR: Mudança não executada";
	}
}
