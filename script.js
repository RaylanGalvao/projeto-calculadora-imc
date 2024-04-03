var peso
var altura
var imc
var resultado
function calcular(event){
    event.preventDefault()

    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value

    imc = peso / (altura*altura)

    console.log(imc)

    if(imc<17){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = '<br> Seu resultado foi: '+imc+'<div> Cuidado voce esta muito abaixo do peso'
    }
    else if(imc>17 && imc <=18.49){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = '<br> Seu resultado foi: '+imc+'<div> voce esta abaixo do peso'
    }
    else if(imc>18.5 && imc <=24.9){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = '<br> Seu resultado foi: '+imc+'<div> voce esta no peso ideal'
    }
    else if(imc>25 && imc <=29.9){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = '<br> Seu resultado foi: '+imc+'<div> voce esta acima do peso ideal'
    }
    else if(imc >= 30){
        resultado = document.getElementById('resultado')
        resultado.innerHTML = '<br> Seu resultado foi: '+imc+'<div> Cuidado obesidade'
    }
}