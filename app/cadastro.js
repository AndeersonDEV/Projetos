import { main } from "./main.js"

const formulario = document.querySelector("[data-formulario]")


async function criarProjeto(evento){
    evento.preventDefault()
    const titulo = document.querySelector("[data-projeto]").value
    const descricao = document.querySelector("[data-descricao]").value
    const status = document.querySelector("[data-status]").value
    const motivo = document.querySelector("[data-motivo]").value

   await main.CriaProjeto(titulo, descricao, status, motivo)

   window.location.href ="../pages/envio-concluido.html"
}

formulario.addEventListener('submit', evento => criarProjeto(evento))