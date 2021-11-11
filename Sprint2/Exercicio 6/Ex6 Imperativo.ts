import {Person} from "./interface.js"

export class Informations{
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

	public change(id:number, field: 'bio' | 'name', change: string): boolean{
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
