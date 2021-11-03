interface Person{
	id: number;
	name: string;
	bio: string;
}

interface Mudar{
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

function getIndex(id:number): number | undefined{
	for (let index:number = 0; index < list.length;index++){
		if (list[index].id == id){
			return index;
		}
	}
	return undefined;
}

/**
 *
 * @param id id a ser encontrado
 * @returns Bio em caso de id válido | "Id não encontrado" em caso de id inválido
 */
 function getBio(id:number):string{
	let index: number | string = getIndex(id);
	return list[index] ? list[index].bio : "Id não encontrado"
}

/**
 *
 * @param id id a ser encontrado
 * @returns Nome em caso de id válido | "Id não encontrado" em caso de id inválido
 */
function getName(id:number):string{
	let index: number | string = getIndex(id);
	return list[index] ? list[index].name : "Id não encontrado"
}

/**
 *
 * @param id Id a ser deletado
 * @returns "item deletado" em caso de id válido | "Id não encontrado" caso id inválido
 */
function deleteElement(id:number):string{
	let index: number | string = getIndex(id);
	if (list[index]){
		const novo_index: number = Number(index);
		list.splice(novo_index,1);
		return "Item deletado";
	}
	else {
		return "Id não encontrado";
	}
}

/**
 * Função para mudar nome ou bio de um elemento da lista
 * @param id Id do item a ser mudado
 * @param campo campo a ser mudado, aceita apenas "name" ou "bio"
 * @param mudanca Nova strign para o campo
 * @returns Mudança ocorrida ou Mensagem de erro
 */
function change(id: number, campo: "name"| 'bio', mudanca: string):string | Error{
	let index: number | string = getIndex(id);
	if(list[index]){
		if (campo == 'name'){
			list[index][campo] = mudanca;
			return "Name modificado";
		}
		else if (campo == 'bio'){
			list[index][campo] = mudanca;
			return "Bio modificado";
		}
	}
	else{
		return new Error("Id não encontrado");
	}
}

console.log(change(1,"name", "DeeDee"));
console.log(change(1,"bio", "BIO"));
console.log(list);
console.log(change(9,"bio", "BIO"));
