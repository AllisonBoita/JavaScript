/*

Exercício 6: If/Else e Operadores Lógicos
Escreva um programa que receba a idade de uma pessoa e exiba:
"Pode dirigir" se a idade for maior ou igual a 18.
"Não pode dirigir" se for menor.
Utilize um operador lógico para validar se a idade é um número positivo.

*/

let idade = 25

if (idade > 0) {  // Verificando se a idade é um número positivo
    if (idade >= 18) {
        console.log('Pode dirigir')
    } else {
        console.log('Não pode dirigir')
    }
} else {
    console.log('Por favor, insira uma idade válida')
}
