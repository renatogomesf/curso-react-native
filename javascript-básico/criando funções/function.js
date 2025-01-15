var area = document.getElementById('area')

function entrar() {
    var nome = prompt("digitar nome")

    if(nome === '' || nome === null){
        area.innerHTML = 'clique no botão para acessar.'
    }else{
        area.innerHTML = `bem vindo ${nome} `

        let botaoSair = document.createElement("button")
        botaoSair.innerText = 'sair'
        botaoSair.onclick = sair
        area.appendChild(botaoSair)

    }

}

function sair() {
    area.innerHTML = 'você saiu'
}