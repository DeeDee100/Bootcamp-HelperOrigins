
function number_vogals(phrase:string){

	let count = 0;
	phrase = phrase.toLowerCase()
	for (var char of phrase){
		if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
			count++;
		}
	}

	alert(count)
}



