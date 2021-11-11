import {Person} from "./interface.js"

export class Informacao{
	public lista: Array<Person>;

	public constructor(lista: Array<Person>){
		this.lista = lista;
	}

	public pegaPessoa(id: number){
		return this.lista.find(pessoa => pessoa.id == id);
	}

	public pegaNome(id: number): string | boolean{
		return this.pegaPessoa(id)?.name || false;
	}

	public pegaBio(id: number): string | boolean{
		return this.pegaPessoa(id)?.bio || false;
	}

	public deletaPessoa(id: number){
		return this.lista.filter( pessoa => pessoa.id != id);
	}

	public mudarCampo(id: number, campo: 'name'| 'bio', mudanca: string): Array<Person> | boolean{
		let novaLista:  Array<Person> = this.lista.map((pessoa: Person) => ({...pessoa}))
		let index = this.lista.indexOf(this.pegaPessoa(id));
		if (novaLista[index]){
			novaLista[index][campo] = mudanca;
			return novaLista;
		}
		return false;
	}
}
