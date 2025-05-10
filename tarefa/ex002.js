//  2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else. 
const prompt = require('prompt-sync')()
let idadePessoa = Number(prompt("Insira uma idade válida:"))
if (isNaN(idadePessoa) || idadePessoa < 0) {
   console.log("Insira um número inteiro válido")
} else if (idadePessoa >= 0 && idadePessoa <= 14) {
    console.log("Criança")
} else if (idadePessoa >= 15 && idadePessoa <= 17){
    console.log("Adolescente")
 } else if (idadePessoa >= 18 && idadePessoa <= 59){
    console.log("Adulto")

 } else {
    console.log("Idoso")
 }