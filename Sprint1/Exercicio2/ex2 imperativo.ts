//  Xa) Crie uma função que retorne a bio do id passado
//  Xb) Crie uma função que retorne o name do id passado
//  Xc) Crie uma função que apague um item da lista a partir de um id passado
//  Xd) Crie uma função que altere a bio ou o name a partir de um id passado
//  Xe) Demonstre todas as funções com o paradigma funcional e com o imperativo

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

interface Mudar{
	name: string;
	bio: string;
}

/**
 *
 * @param id Id a ser mudado
 * @param name Boolean, true se for o item a ser mudado - Default = false
 * @param bio Boolean, true se for o item a ser mudado - Default = false
 * @param mudanca Novo texto para o parametro passado, caso os dois sejam "true" é o texto para o nome - Default = ""
 * @param mudanca_opcional Novo texto para a bio - Opcional
 */
function change(id: number, mudanca: Mudar, name: boolean=false, bio: boolean=false):string{
	let index: number | string = getIndex(id);
	if(list[index]){
		if(name == true && bio == false){
			list[index].name = mudanca.name;
			return "Nome mudado";
		}
		else if(bio == true && name == false){
			list[index].bio = mudanca.bio;
			return "Bio mudada";
		}
		else if(bio == true && name == true){
			list[index].bio = mudanca.bio;
			list[index].name = mudanca.name;
			return "Bio e nome mudados";
		}
		else{
			return "Escolha entre bio ou name";
		}
	}
	else{
		return "Id não encontrado";
	}
}

console.log(change(1,{name: "wqeuywequiyewqw", bio:"BIO"},true,true));
console.log(change(2,{name: "?????", bio:"BIO"},true,false));
console.log(change(2,{name: "?????", bio:"BIO"},false,true));
console.log(list);