function numeroVogais(phrase:string):number {

	let count:number = 0;
	phrase = phrase.toLowerCase()
	for (let char of phrase){
		if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
			count++;
		}
	}

	return count
}


console.log(numeroVogais("Heey"));
console.log(numeroVogais("kkkkk"));
console.log(numeroVogais("DEE Dee"));