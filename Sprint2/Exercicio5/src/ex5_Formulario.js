import { Vogals } from "../ex5_Funcao.js";
function mouseClick() {
    const texto = document.getElementById("text").value;
    const frase = new Vogals(texto);
    alert(frase.getVogals());
}
const button = document.getElementById("button");
button.onclick = mouseClick;
//# sourceMappingURL=ex5_Formulario.js.map