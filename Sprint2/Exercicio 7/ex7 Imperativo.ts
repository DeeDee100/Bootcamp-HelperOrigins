
class ValoresArray{
	public lista: Array<any>;

	constructor(lista: Array<any>){
		this.lista = lista
	}

	public maioMenorMedia(){
		let novaLista: Array<number> = [];
		for(let numero of this.lista){
			if(typeof(numero) === 'number'){
				novaLista.push(numero);
			}
			else{
				return false;
			}
		}
		novaLista.sort();
		const length: number = novaLista.length;
		const soma: number = novaLista.reduce((numero1, numero2) => numero1 + numero2, 0);
		const maior: number = novaLista.pop();
		const menor: number = novaLista.shift();
		const media: number = soma / length;

		return [maior, menor, media];
	}
}