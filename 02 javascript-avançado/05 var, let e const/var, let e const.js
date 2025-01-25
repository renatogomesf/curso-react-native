
// VAR, LET, CONST

// var: permite ser acessada/chamada fora do escopo de um bloco de comandos.

var nome = 'sujeito'

if(nome === 'sujeito') {
    var curso = 'programador frontend'
    console.log(curso)
}

console.log(curso); // chamando a variável "curso" que está dentro do escopo de um bloco de comando.


// let: NÃO permite ser acessada/chamada fora do escopo de um bloco de comandos.

var nome = 'sujeito'

if(nome === 'sujeito') {
    // let só pode ser usada dentro do escopo/bloco de comando onde foi definida ou num escopo/bloco de comando "filho".
    let cargo = 'CEO - programador'
    console.log(cargo)
}

console.log(cargo);// da erro


// const: NÃO permite ser acessada/chamada fora do escopo de um bloco de comandos. mas, por ser uma constante (const/não muda), não permite a troca do valor atribuido inicialmente. também não permite inicializar sem um valor atribuido.

const cargo = 'programador'

cargo = 'js' // da erro

console.log(cargo);
