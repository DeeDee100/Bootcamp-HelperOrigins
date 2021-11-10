const numberList = [1,2,6,9,4];
const MixedList = [1,2,6,"lul", 9];

class Values{
	public list: Array<any>;

	constructor(list: Array<any>){
		this.list = [...list];
	}

	public maxValue(){
		let newList: Array<number> = [...this.list];
		newList.sort();
		return newList.pop() || 0;
	}

	public minValue(){
		let newList: Array<number> = [...this.list];
		newList.sort();
		return newList.shift() || 0;
	}

	public average(){
	let newList: Array<number> = [...this.list];
	let sum: number = newList.reduce((numero1, numero2) => numero1 + numero2, 0);
	const result: number = sum / (newList.length || 1);
	return result;
	}

	public maxMinAverage(){
		if (this.list.length === 0){
			return "Lista Vazia";
		}
		else if (!this.list.every(item => typeof(item) === "number")){
			return "Item não é um número";
		}
		else{
			const big: number = this.maxValue();
			const minimun: number = this.minValue();
			const average: number = this.average();
			
			return [big, minimun, average];
		}
	}
}
