
// Objetos

let pessoa = {
    nome: 'renato',
    idade: '21',
    altura: '1.75',
    cargo: 'programador'
}

console.table(pessoa)
console.log(pessoa.nome);
console.log(pessoa.cargo);

let carro = {
    nome: 'golf 1.6',
    cor: 'branco',
    potencia: '140vc'
}

console.table(carro);
console.log(carro.potencia);
console.log(carro.nome);

let usuarios = [
    {nome: 'mateus', cargo: 'programador', status: 'ativo'},
    {nome: 'maria', cargo: 'backend', status: 'ativo'},
    {nome: 'jose', cargo: 'rh', status: 'ativo'}
]

console.table(usuarios);
console.log(usuarios[0].nome);
console.log(usuarios[1].cargo);
