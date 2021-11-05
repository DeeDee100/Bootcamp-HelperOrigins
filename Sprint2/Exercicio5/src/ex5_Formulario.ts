import { Vogals } from "../ex5_Funcao.js"

function mouseClick(){
	let texto = (document.getElementById("text") as HTMLInputElement).value;
	let frase = new Vogals(texto);
	alert(frase.getVogals());
}

const btn = document.getElementById("btn");
btn.onclick = mouseClick;