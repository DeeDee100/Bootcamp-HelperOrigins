
function number_vogals(phrase:string){

	let count = 0;
	phrase = phrase.toLowerCase()
	for (var char of phrase){
		if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
			count++;
		}
	}

	return count
}


console.log(number_vogals("Heey"));
console.log(number_vogals("kkkkk"));
console.log(number_vogals("Dee Dee"));
