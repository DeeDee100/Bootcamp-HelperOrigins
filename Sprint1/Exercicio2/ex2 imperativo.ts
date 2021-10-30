
//  Xa) Crie uma função que retorne a bio do id passado
//  Xb) Crie uma função que retorne o name do id passado
//  Xc) Crie uma função que apague um item da lista a partir de um id passado
//  Xd) Crie uma função que altere a bio ou o name a partir de um id passado
//  Xe) Demonstre todas as funções com o paradigma funcional e com o imperativo

	let list: Array<{ id: number, name: string, bio: string }> = [
		{"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
		{"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
		{"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
		{"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
	];


/**
 *
 * @param id id a ser encontrado
 * @returns Bio em caso de id válido | "Id não encontrado" em caso de id inválido
 */
function getBio(id:number):string{
	let i:number;
	for (let index in list){
		if (list[index].id == id){
			i = id;
		}
	}
	if (typeof(i) == "undefined"){
		return "Id não encontrado"
	}
	else{
		return list[i].bio
	}
}

/**
 *
 * @param id id a ser encontrado
 * @returns Nome em caso de id válido | "Id não encontrado" em caso de id inválido
 */
function getName(id:number):string{
	let i:number;
	for (let index in list){
		if (list[index].id == id){
			i = id;
		}
	}
	if (typeof(i) == "undefined"){
		return "Id não encontrado"
	}
	else{
		return list[i].name
	}
}

/**
 *
 * @param id Id a ser deletado
 * @returns "item deletado" em caso de id válido | "Id não encontrado" caso id inválido
 */
function delElement(id:number):string{
	let i:number;
	for (let index in list){
		if (list[index].id == id){
			i = id;
		}
	}

	if (typeof(i) == "undefined"){
		return "Id não encontrado"
	}
	else {
		list.splice(i-1,1);
		return "Item deletado"
	}
}


/**
 *
 * @param id Id a ser mudado
 * @param name Boolean, true se for o item a ser mudado - Default = false
 * @param bio Boolean, true se for o item a ser mudado - Default = false
 * @param string Novo texto para o parametro passado, caso os dois sejam "true" é o texto para o nome - Default = ""
 * @param string Novo texto para a bio - Opcional
 */
function change(id: number, string1: string, name: boolean=false, bio: boolean=false, string2?:string):string{
	let i: number;
	for (let index in list){
		if (list[index].id == id){
			i = id;
		}
	}
	if (typeof(i) == "undefined"){
		return "Id não encontrado";
	}
	else{
		if(name == true && bio == false){
			list[i].name = string1;
			return "Nome mudado";
		}
		else if(bio == true && name == false){
			list[i].bio = string1;
			return "Bio mudada";
		}
		else if(bio == true && name == true){
			list[i].bio = string1;
			list[i].name = string2;
			return "Bio e nome mudados";
		}
		else{
			return "Escolha entre bio ou name";
		}
	}
}





//console.log(getName(0));
// console.log(getName(8));
// console.log(getBio(2));
// console.log(getBio(8));
console.log(change(1,"NAME",false,));
// console.log(change(1,true,true,"NAME", "BIOqw231"));
// console.log(change(1,false,true,"Hellows, bio"));
// console.log(change(1,false,false,"Hellows"));
