
// desconstrução - objeto ========================================================

let pessoa = {
    nome: 'mateus',
    sobrenome: 'fraga',
    empresa: 'sujeito programador',
    cargo: 'programador'
}

//console.log(pessoa.nome);
//console.log(pessoa.cargo);

let nome = 'TESTE'

/* renomear uma propriedade de objeto APENAS NA DESCONSTRUÇÃO (nome:nomePessoa "a propriedade nome agora se chgama nomePessoa") */
const {nome:nomePessoa, cargo, empresa, sobrenome} = pessoa

// console.log(nome);
// console.log(nomePessoa);
// console.log(cargo);
// console.log(empresa);
// console.log(sobrenome);


// desconstrução - array ==========================================================

//forma 01
let nomes = ['Mateus','Lucas','Henrique']
console.log(nomes[1]);

let {0:mateus, 1:lucas, 2:henrique} = nomes

console.log(mateus);
console.log(henrique);

//forma 02 - segue uma sequência... o primeiro nome dado via se referir à primeira posição do array, o segundo à segunda posição e assim em diante.
let [primeiroNome, segundoNome, terceiroNome] = nomes

