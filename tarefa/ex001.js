//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if. Importa o pacote prompt-sync, que possibilita a leitura de entrada no terminal.

const prompt = require('prompt-sync')()
let numInt= Number(prompt("Insira um número inteiro:"))
 if (numInt % 2 === 0) {
    console.log( `${numInt} é um número par`)
    } else  {
        console.log(`${numInt} é um número ímpar`)
    }
