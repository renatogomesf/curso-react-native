
var lista = ['renato', 'karen', 'kellen', 123]

// console.log(lista.length);
// console.log(lista[0]);
// console.log(lista[1]);
// console.log(lista);

// manipulando arrays

console.log(lista.indexOf('karen'))
console.log(lista.indexOf('kellen'))
console.log(lista.indexOf('aaaaaa')) // devolve -1 indicando que não existe.
console.log('-------------------------------------------------------------');

// alterando elementos do array
lista[2] = 'boris'
console.log(lista[2]);
console.log('-------------------------------------------------------------');

// adicionando elementos no final do array
console.log(lista.push('kellen'))
console.log(lista)
console.log('-------------------------------------------------------------');

// adicionando elementos no inicio do array
console.log(lista.unshift('renato gomes'))
console.log(lista)
console.log('-------------------------------------------------------------');

// removendo elementos do inicio do array
console.log(lista.shift())
console.log(lista)
console.log('-------------------------------------------------------------');

// removendo elementos do final do array
console.log(lista.pop())
console.log(lista)
console.log('-------------------------------------------------------------');

// juntando elementos do array em uma string separados por um traço (-) ou qualquer outro caractere.
console.log(lista.join(' - '))
console.log('-------------------------------------------------------------');


// concatenando arrays
var lista2 = ['gomes', 'pinheiro', 'boris', 123]
console.log(lista.concat(lista2))