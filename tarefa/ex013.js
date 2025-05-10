//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. 
const prompt = require('prompt-sync')()
let soma = 0
let numero = ''
let contador = 0

do {
    numero = parseFloat(prompt("Digite um número decimal e 0 para sair:"))
    if(numero !== 0){
        soma += numero
        contador++
    }
} while(numero !== 0)
    let media = contador > 0 ? soma / contador : 0
    console.log (`Média aritmética: ${media.toFixed(2)}`)