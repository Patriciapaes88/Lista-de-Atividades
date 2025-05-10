//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais e escreve-los em ordem crescente. 

const prompt = require('prompt-sync')()
function algoritmo () {
    let valor1 ,valor2
 
     do {
        valor1 = parseFloat(prompt("Digite o primeiro valor:"))
        if(isNaN(valor1)) {
            console.log("Entrada invalida! Digite um número válido:")
        }
     } while (isNaN(valor1))
    do {
    valor2 = parseFloat(prompt("Digite o segundo valor:"))
        if (isNaN(valor2)) {
            console.log("Entrada inválida! Digite um número válido:")
  
        } else if  (valor1 === valor2) {
          console.log("Digite um número diferente do primeiro.")  
        }  
} while (isNaN(valor2) || valor1 === valor2)
    console.log(`Valores em ordem crescente: ${Math.min(valor1, valor2)}, ${Math.max(valor1,valor2)}`)
}
algoritmo()