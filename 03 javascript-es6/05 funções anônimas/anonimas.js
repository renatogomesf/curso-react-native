
// funções anonimas (arrou function) = () => {}

function somar(a,b) {
    let total = a + b
    return total
}

console.log(somar(2,2))


let subtrair = (valor1,valor2) => {
    let total = valor1 - valor2
    return total
}

console.log(subtrair(2,2))



let numeros = [11111,3,5,6]

numeros.map((item)=>{
    console.log(item)
})