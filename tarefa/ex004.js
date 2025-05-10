//4 Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require('prompt-sync')()

console.log("1 - Café")
console.log ("2 - Suco")
console.log ("3 - Chá")
let bebida = Number(prompt("Digite sua bebida favorita:"))



switch (bebida){
case 1:
    console.log ("Você escolheu café!")
    break
case 2:
    console.log("Você escolheu Chá!")
    break
case 3 :
    console.log("Você escolheu Suco")
    break
 default:
    console.log("Opção inválida! Escolha um número entre 1 e 3.")   
}


