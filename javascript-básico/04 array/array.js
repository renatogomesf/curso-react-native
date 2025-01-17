
var lista = ['renato', 'karen', 'kellen', 123]

// console.log(lista.length);
// console.log(lista[0]);
// console.log(lista[1]);
// console.log(lista);

// manipulando arrays

console.log(lista.indexOf('karen'))
console.log(lista.indexOf('kellen'))
console.log(lista.indexOf('aaaaaa')) // devolve -1 indicando que não existe.

// alterando elementos do array
lista[2] = 'boris'
console.log(lista[2]);

// adicionando elementos ao array
lista.push('kellen')
console.log(lista)

// removendo elementos do inicio do array
console.log(lista.shift())
console.log(lista)

// removendo elementos do final do array
console.log(lista.pop())
console.log(lista)

// juntando elementos do array em uma string separados por um traço (-) ou qualquer outro caractere.
console.log(lista.join(' - '))
