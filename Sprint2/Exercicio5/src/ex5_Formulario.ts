import { Vogals } from "../ex5_Funcao.js"

function mouseClick(): void{
	const texto: string = (document.getElementById("text") as HTMLInputElement).value;
	const frase: Vogals = new Vogals(texto);
	alert(frase.getVogals());
}

const button = document.getElementById("button");
button.onclick = mouseClick;