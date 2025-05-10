//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. 

 const prompt = require('prompt-sync')()
 let quantidade =Number(prompt("Digite o número de maças que irá comprar:"))

 let preco = '' 
 

 switch (true) {
    case quantidade < 12:
    preco = 0.30
    break
    default:
        preco = 0.25

 }

 let total = quantidade * preco
console.log(`O valor total de sua compra será R$ ${total.toFixed(2)}`)