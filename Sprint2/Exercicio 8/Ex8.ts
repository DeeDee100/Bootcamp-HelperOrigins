interface Person{
	id: number;
	name: string;
	bio: string;
}

class Cientista implements Person{
	public id: number;
	public name: string;
	public bio: string;
	public invencao: Array<string> ;

	constructor(id: number, name: string, bio: string, invencao:string){
		this.id = id;
		this.name = name;
		this.bio = bio;
		this.invencao =[invencao];
	}

	public pegaBio(){
		return this.bio;
	}
	
	public pegaNome(){
		return this.name
	}

	public pegaInvencao(){
		return this.invencao;
	}
}


export class FabricaDeCientista{
	public static create(id:number, name:string, bio:string, invencao){
		return new Cientista(id, name, bio, invencao)
	}
}
