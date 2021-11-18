import {FabricaDeCientista} from "./Ex8.js"

enum cientistas{
	ada  = 'Ada Lovelace',
	alan = 'Alan Turing',
	tesla = 'Nikola Tesla',
	copernico = 'Nicolau Copérnico'
}

let lista: Array<Person> = [
	{"id" : 1, "name": "Ada Lovelace", "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
	{"id" : 2, "name": "Alan Turing", "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista1, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia"},
	{"id" : 3, "name": "Nikola Tesla", "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada"},
	{"id" : 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];

//ADA -  "invencao": ["Criadora da Linguagem ADA"]
//Turing - "invencao": ['A maquina de Turing']
//Tesla - Corrente alternada
//Copernico - Teoria Helio centrica

function criarCientista(){
	for (let pessoa of lista){
		if(pessoa.name == cientistas.ada){
			const ada = FabricaDeCientista.create(pessoa.id, pessoa.name, pessoa.bio, 'Criadora da linguagem ADA');
			console.log();
			console.log(ada.pegaBio());
			console.log(ada.pegaNome());
			console.log(ada.pegaInvencao());
			console.log();
		}
		else if (pessoa.name == cientistas.alan){
			const turing = FabricaDeCientista.create(pessoa.id, pessoa.name, pessoa.bio, 'A maquina de Turing');
			console.log();
			console.log(turing.pegaBio());
			console.log(turing.pegaNome());
			console.log(turing.pegaInvencao());
			console.log();
		}
		else if (pessoa.name == cientistas.tesla){
			const tesla = FabricaDeCientista.create(pessoa.id, pessoa.name, pessoa.bio, 'Corrente Alternada');
			console.log();
			console.log(tesla.pegaBio());
			console.log(tesla.pegaNome());
			console.log(tesla.pegaInvencao());
			console.log();
		}
		else if (pessoa.name == cientistas.copernico){
			const copernico = FabricaDeCientista.create(pessoa.id, pessoa.name, pessoa.bio, 'Teoria Heliocentrica');
			console.log(copernico.pegaBio());
			console.log(copernico.pegaNome());
			console.log(copernico.pegaInvencao());
			
		}
		else{
			console.log("Cientista não encontrado");
		}
	}
	
}

criarCientista();
