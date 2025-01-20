

function mediaAluno(nota1, nota2){
    var media = (nota1 + nota2) / 2

    if(media >= 7) {
        console.log(`aluno aprovado com a média: ${media}`);
    }else if(media < 7){
        console.log(`aluno reprovado com a média: ${media}`);
    }
}

function aluno(nome, curso) {
    var mensagem = `seja bem vindo ${nome} ao curso de ${curso}`

    console.log(mensagem);
    
}

aluno('Renato', 'Eng. de Software')