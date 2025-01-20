// while  = enquanto

/*
var x = 0

while (x <= 10) {
    document.write("<br> o valor do x é: " + x)
    x++
}
*/



// for = para

/*
var valor = 30

for(i = 0; i <= valor; i++){
    document.write("<br> o valor do i é: " + i)
}
*/


// switch = escolha

function pedir(){
    var valor = Number(prompt("Digite um valor de 1 a 4"))

    switch(valor){
        case 1:
            alert("Você escolheu 1 = suco")
            break
        case 2:
            alert("Você escolheu 2 = água gelada")
            break
        case 3:
            alert("Você escolheu 3 = sorvete")
            break
        case 4:
            alert("Você escolheu 4 = chamar garçom")
            break
        default:
            alert("escolha uma opção entre 1 e 4")
            break
    }
}