// muito parecido com spread, mas mais voltado para funções.

// rest operator. pega todos os parametros inviados e junta num array.

function convidados(...nomes) {
    console.log(nomes);
}

convidados('mateus','lucas','maria','ana')

//===========================================================================

function sorteador(...numeros) {
    console.log(numeros);

    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log(numeros[numeroGerado]);
}

sorteador(1,4,65,7,8,0,10)