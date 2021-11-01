//import {getId, delElement, change} from '../Exercicio2/ex2 imperativo';
let listaPessoas = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
//criar elem de linha, pega o valor da lista e inserir no DOM 
//apendchild | Doc create element | inserir no DOM
function criaId(tr, colum) {
    const td = tr.insertCell();
    td.appendChild(document.createTextNode(`${listaPessoas[colum].id}`));
    td.style.width = '10px';
    td.style.display = 'flex';
    td.style.justifyContent = 'space-evenly';
    //td.style.border = '1px solid black';
}
function criaNome(tr, colum) {
    const td = tr.insertCell();
    td.appendChild(document.createTextNode(`${listaPessoas[colum].name}`));
    td.style.width = 'auto';
    td.style.border = '1px solid black';
}
function criaBio(tr, colum) {
    const td = tr.insertCell();
    td.appendChild(document.createTextNode(`${listaPessoas[colum].bio}`));
    td.style.width = 'auto';
    td.style.border = '1px solid black';
}
function criaTabela() {
    const body = document.body;
    const table = document.createElement('table');
    table.id = "tabela";
    table.style.position = 'top';
    table.style.width = '50%';
    table.style.tableLayout = 'auto';
    table.style.border = '1px solid black';
    for (let colum = 0; colum < listaPessoas.length; colum++) {
        const tr = table.insertRow();
        criaId(tr, colum);
        criaNome(tr, colum);
        criaBio(tr, colum);
    }
    body.appendChild(table);
}
criaTabela();
//pega o index do id indicado
function pegaIndex(id) {
    for (let index = 0; index < listaPessoas.length; index++) {
        if (listaPessoas[index].id == id) {
            return index;
        }
    }
    return "404: Id não econtrado";
}
//muda o item marcado no checkbox com a string especificada
function mudaItem(id, string_nome, name = false, bio = false, string_bio) {
    let index = pegaIndex(id);
    if (listaPessoas[index]) {
        if (name == true && bio == false) {
            listaPessoas[index].name = string_nome;
            return "Nome mudado";
        }
        else if (bio == true && name == false) {
            listaPessoas[index].bio = string_bio;
            return "Bio mudada";
        }
        else if (bio == true && name == true) {
            listaPessoas[index].bio = string_bio;
            listaPessoas[index].name = string_nome;
            return "Bio e nome mudados";
        }
        else {
            return "Escolha entre bio ou name";
        }
    }
    else {
        return "Id não encontrado";
    }
}
//Deleta um item da tabela a partir do id passado
function deletarItem(id) {
    let index = pegaIndex(id);
    if (listaPessoas[index]) {
        const novo_index = Number(index);
        listaPessoas.splice(novo_index, 1);
        return "Item deletado";
    }
    else {
        return "Id não encontrado";
    }
}
//Exclui a tabela antiga e cria uma nova com os valores atualizados.
function recarregarTabela() {
    const body = document.body;
    let form = document.getElementById('tabela');
    body.removeChild(form);
    criaTabela();
}
//Chama a função mudaItem passando os parâmetros recebidos pelo formulário.
//E chama a função recarregarTabela
function mudanca() {
    const id_mudar = document.getElementById('id_mudar');
    const checkValue_bio = document.getElementById('bio');
    const checkValue_name = document.getElementById('name');
    const stringBio = document.getElementById('bio_string');
    const stringName = document.getElementById('name_string');
    const id = Number(id_mudar.value);
    mudaItem(id, stringName.value, checkValue_name.checked, checkValue_bio.checked, stringBio.value);
    recarregarTabela();
}
//Deleta a partir do id dado na pagina e chama a função recarregarTabela.
function deletar() {
    const id_deletar = document.getElementById("id_del");
    const id = Number(id_deletar.value);
    deletarItem(id);
    recarregarTabela();
}
//# sourceMappingURL=ex4.js.map