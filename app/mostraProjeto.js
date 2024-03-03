import { main } from "./main.js"

const lista = document.querySelector("[data-lista]")

 function constroiLista(titulo, descricao, status, motivo){
    const projeto = document.createElement("tr")
    projeto.innerHTML = `
    <td>${titulo}</td>
    <td>${descricao}</td>
    <td>${status}</td>
    <td>${motivo}</td>
    `
    return projeto
}

async function listaProjeto(){
    const listaAPI = await main.listaProjetos()
    listaAPI.forEach(elemento => lista.appendChild(constroiLista(elemento.titulo, elemento.descricao, elemento.status, elemento.motivo)));
}
listaProjeto()