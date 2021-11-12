let lista = [1,2,3,4,5]

class ValoresArray{
	public lista: Array<any>;

	constructor(lista: Array<any>){
		this.lista = lista;
	}

	public maiorNumero(lista: Array<number>): number{
		return lista.sort().pop();
	}

	public menorNumero(lista: Array<number>): number{
		return lista.sort().shift();
	}

	public media(lista: Array<number>): number{
		let novaLista: Array<number> = lista;
		const soma: number = novaLista.reduce((numero1, numero2) => numero1 + numero2, 0);
		return (soma / novaLista.length) | 0;

	}

	public maioMenorMedia(): string | Array<number>{
		let novaLista: Array<number> = [];
		for(let numero of this.lista){
			if(typeof(numero) === 'number'){
				novaLista.push(numero);
			}
			else{
				return `Item: "${numero}" não é um número`;
			}
		}

		const maior: number = this.maiorNumero(novaLista);
		const menor: number = this.menorNumero(novaLista);
		const media: number = this.media(novaLista);

		return [maior, menor, media];
	}
}

let teste1 = new ValoresArray(lista);
console.log(teste1.maioMenorMedia());