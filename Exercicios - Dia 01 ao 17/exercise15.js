/*

Exercício 5: Calculando a média de notas
Descrição: Crie um programa que calcule a média de 5 notas de um aluno. O programa deve:

Receber as 5 notas do aluno.
Calcular a média.
Exibir a média e uma mensagem de aprovação ou reprovação (média >= 7 = aprovado, média < 7 = reprovado).

*/

nota1 = 3
nota2 = 5
nota3 = 10
nota4 = 10
nota5 = 8

let calculoMedia = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

if (calculoMedia >= 7){
    console.log(`Sua média foi ${calculoMedia} e você está aprovado!`)
} else {
    console.log(`Sua média foi ${calculoMedia} e você foi reprovado!`)
}
