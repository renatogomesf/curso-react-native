
// Spread Operator "..." (tres pontos)


// array =====================================================================
let primeiros = [1,2,3]

let numeros = [...primeiros,4,5,6]

console.log(numeros);

// objetos ===================================================================
let pessoa = {
    nome: 'mateus',
    idade: 45,
    cargo: 'rh'
}

let novaPessoa = {
    ...pessoa,
    status: 'ATIVO',
    cidade: 'campo grande - ms',
    telefone: '982938883983'
}

console.log(novaPessoa);

// outra situação =============================================================
function novoUsuario(info) {
    let dados = {
        ...info,
        status: 'ativo',
        inicio: '20/03/2023',
        codigo: '123123'
    }

    console.log(dados);
}

novoUsuario({nome: 'jose', sobrenome: 'silva', cargo: 'dev'})