//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. 
 
 const prompt = require('prompt-sync')()
 let notaAluno = Number(prompt("Insira á nota entre (0 e 10):"))
 if (isNaN(notaAluno) ||notaAluno < 0 || notaAluno > 10 ) {
    console.log("Nota inválida, digite valor entre 0 e 10.") 

    } else if (notaAluno >= 6){
     console.log(`Com a ${notaAluno}, você está aprovado Parabéns.`)
    } else if (notaAluno >= 5){
     console.log(`Com a nota ${notaAluno},você está de recuperação, mas não desista você ainda tem chance de ser aprovado.`)
 } else {
    console.log(`Com a nota ${notaAluno},você está reprovado`)
 }