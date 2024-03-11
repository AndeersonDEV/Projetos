const endPointAPI = 'https://andeersondev.github.io/teste-base/dados.json'

async function listaProjetos (){
    const conexao = await fetch(endPointAPI)
    const conexaoConvertida = await conexao.json()
    
    return conexaoConvertida
}
async function CriaProjeto(titulo, descricao, status, motivo){
    const conexao = await fetch(endPointAPI, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            'Access-Control-Allow-Origin':'https://andeersondev.github.io/teste-base/dados.json'
            
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: descricao,
            status: status,
            motivo: motivo
        })
    })
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
    
}


export const main ={
    listaProjetos,
    CriaProjeto
}