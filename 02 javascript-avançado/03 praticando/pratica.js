
/*
abaixo de 17 muito abaixo do peso;
entre 17 e 18,49 abaixo do peso;
entre 18,5 e 24,99 peso normal;
entre 25 e 29,99 acima do peso;
*/

var peso
var altura
var imc
var resultado

function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    
    imc = peso / (altura * altura)
    
    resultado = document.getElementById('resultado')

    if(imc < 17) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está muito abaixo do peso!'
    }else if(imc > 17 && imc <= 18.49) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está abaixo do peso!'
    }else if(imc > 18.5 && imc <= 24.99) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está com o peso normal!'
    }else if(imc > 25 && imc <= 29.99) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está acima do peso!'
    }else if(imc >= 30) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está obeso!'
    }

    document.getElementById('peso').value = ''
    document.getElementById('altura').value = ''
}