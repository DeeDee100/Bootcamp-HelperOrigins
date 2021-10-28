
function number_vogals(phrase:string):void {

	let count:number = 0;
	phrase = phrase.toLowerCase()
	for (let char of phrase){
		if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
			count++;
		}
	}

	alert(count)
}



