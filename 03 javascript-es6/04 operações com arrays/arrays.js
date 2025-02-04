
// operações com arrays

// map() = percorrer um array ============================================================
let lista = ['mateus','jose','maria','lucas']

// lista.map((item,indice)=>{
//     console.log(`passando o item: ${item} - está na posição: ${indice}`);
// })

// reduce() = busca reduzir um array =====================================================
let numeros = [5,4,3]

let total = numeros.reduce((acumulador,numero,indice,original)=>{
    console.log(`${acumulador} - total até o momento`)
    console.log(`${numero} - valor atual`)
    // console.log(`${indice} - posição atual`)
    // console.log(`${original} - array original`)
    console.log('===========================================================');

    return acumulador += numero
})

console.log(total);