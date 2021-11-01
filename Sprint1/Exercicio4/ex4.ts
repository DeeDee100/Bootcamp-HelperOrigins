interface Person{
	id: number;
	name: string;
	bio: string;
}


let listaPessoas: Array<Person> = [
	{"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
	{"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
	{"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
	{"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

//criar elem de linha, pega o valor da lista e inserir no DOM 

function criaInformacoes(tr: HTMLTableRowElement, colum: number){
		const td_id = tr.insertCell();
		const td_name = tr.insertCell();
		const td_bio = tr.insertCell();

		td_id.appendChild(document.createTextNode(`${listaPessoas[colum].id}`));
		td_name.appendChild(document.createTextNode(`${listaPessoas[colum].name}`));
		td_bio.appendChild(document.createTextNode(`${listaPessoas[colum].bio}`));

		td_id.style.width = 'auto'
		td_id.style.border = '1px solid black';
		td_name.style.width = 'auto'
		td_name.style.border = '1px solid black';
		td_bio.style.width = 'auto'
		td_bio.style.border = '1px solid black';
}

/**
 * Cria tabela a partir das informações da lista
 */
function criaTabela(){
	const body: HTMLElement = document.body as HTMLElement;
	const table: HTMLTableElement = document.createElement('table') as HTMLTableElement;
	table.id = "tabela"

	table.style.position = 'top';
	table.style.width = '50%';
	table.style.tableLayout = 'auto';
	table.style.border = '1px solid black';
	for(let colum = 0; colum < listaPessoas.length; colum++){
		const tr: HTMLTableRowElement = table.insertRow();
		criaInformacoes(tr, colum);
	}
	body.appendChild(table);
}
criaTabela();

/**
 * pega o index do id indicado
 * @param id id do item pedido
 * @returns Index do item na lista
 */
function pegaIndex(id:number): number | string{
	for (let indice:number = 0; indice < listaPessoas.length;indice++){
		if (listaPessoas[indice].id == id){
			return indice;
		}
	}
	return "404: Id não econtrado";
}

/**
 * muda o item marcado no checkbox com a string especificada
 * @param id - Id do item a ser mudado
 * @param string_nome - Novo valor do nome
 * @param string_bio - Novo valor da bio
 * @param name - boolean, True se o checkbox esta marcada
 * @param bio - boolean, True se o checkbox esta marcada
 * @returns - Mudança efeituada ou erro econtrado.
*/
function mudaItem(id: number, string_nome: string, name: boolean=false, bio: boolean=false, string_bio:string):string{
	let indice: number | string = pegaIndex(id);
	if(listaPessoas[indice]){
		if(name == true && bio == false){
			listaPessoas[indice].name = string_nome;
			return "Nome mudado";
		}
		else if(bio == true && name == false){
			listaPessoas[indice].bio = string_bio;
			return "Bio mudada";
		}
		else if(bio == true && name == true){
			listaPessoas[indice].bio = string_bio;
			listaPessoas[indice].name = string_nome;
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

/**
 * Deleta um item da tabela a partir do id passado
 * @param id Id do item a ser deletado
 * @returns Item deletado ou Id não encontardo
 */
function deletarItem(id:number):string{
	let indice: number | string = pegaIndex(id);
	if (listaPessoas[indice]){
		const novo_index: number = Number(indice);
		listaPessoas.splice(novo_index,1);
		return "Item deletado";
	}
	else {
		return "Id não encontrado";
	}
}

/**
 * Exclui a tabela antiga e cria uma nova com os valores atualizados.
 */
function recarregarTabela():void{
	const body:HTMLElement = document.body as HTMLElement
	let tabela = document.getElementById('tabela')
	body.removeChild(tabela)
	criaTabela();
}

/**
 * Chama a função mudaItem passando os parâmetros recebidos pelo formulário e chama a função recarregarTabela
 */
function mudanca():void{
	const id_mudar: HTMLInputElement = document.getElementById('id_mudar') as HTMLInputElement
	const checkValue_bio: HTMLInputElement = document.getElementById('bio') as HTMLInputElement;
	const checkValue_name: HTMLInputElement = document.getElementById('name') as HTMLInputElement;
	const stringBio:HTMLInputElement = document.getElementById('bio_string') as HTMLInputElement;
	const stringName: HTMLInputElement = document.getElementById('name_string') as HTMLInputElement;

	const id: number = Number(id_mudar.value)
	mudaItem(id, stringName.value,checkValue_name.checked,checkValue_bio.checked,stringBio.value);
	recarregarTabela();
}

/**
 * Deleta a partir do id dado na pagina e chama a função recarregarTabela.
 */
function deletar(){
	const id_deletar: HTMLInputElement = document.getElementById("id_del") as HTMLInputElement;
	const id: number = Number(id_deletar.value);
	deletarItem(id);
	recarregarTabela();
}
