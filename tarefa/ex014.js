   
    //14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while. 


    const prompt = require('prompt-sync')()
    let numero = Number(prompt("Digite um número:"))
    let fatorial = 1 
    let i = numero
    

    while (i > 1) {
        fatorial *= i
        i--
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`)
