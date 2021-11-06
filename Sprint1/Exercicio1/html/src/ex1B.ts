function number_vogals() :void{
	
	let box = document.getElementById("text") as HTMLInputElement;
	let phrase:string = box.value

	let count:number = 0;
	phrase = phrase.toLowerCase()
	for (let char of phrase){
		if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
			count++;
		}
	}

	alert(count)
}