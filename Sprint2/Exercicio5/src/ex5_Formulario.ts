import { Vogals } from "../ex5_Funcao.js"

function mouseClick(): void{
	let texto: string = (document.getElementById("text") as HTMLInputElement).value;
	let frase: Vogals = new Vogals(texto);
	alert(frase.getVogals());
}

const btn = document.getElementById("btn");
btn.onclick = mouseClick;