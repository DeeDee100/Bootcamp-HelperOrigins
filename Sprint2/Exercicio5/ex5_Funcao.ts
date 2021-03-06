export class Vogals{
	phrase: string;

	constructor (phrase: string){
		this.phrase = phrase;
	}

	getVogals(): number{
		const letters: Array<string> = ['a','e', 'i', 'o', 'u'];
		const newPhrase: string = this.phrase.toLowerCase();
		let count: number = 0;
		for (let char of newPhrase){
			for (const vogals of letters){
				if (char == vogals){
					count++;
				}
			}
		}

		return count; 
	}
}

const vogal: Vogals = new Vogals("Dee DEEe");
vogal.getVogals();
