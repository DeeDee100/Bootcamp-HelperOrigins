
function number_vogals(){
	let box: any = document.getElementById("texto") as HTMLSelectElement;
	let phrase: string = box.value
	
	let count = 0;
	phrase = phrase.toLowerCase()
	for (var char of phrase){
		if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
			count++;
		}
	}

	alert(count)
}



