//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else. 
const prompt= require('prompt-sync')()

let peso = Number(prompt("Qual é o seu peso (kg)? "))
let altura= Number(prompt("Qual a sua altura em metros (m)? "))
let imc =  peso / (altura * altura)
console.log(`Seu IMC é: ${imc.toFixed(2)}`)

if (imc < 18.5) {
    console.log("Você está abaixo do peso.")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Parabéns seu peso está normal.")
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Você está com sobrepeso.")

} else {
    console.log("Obesidade.")
}