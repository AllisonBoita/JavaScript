/*

2. Operadores e Cálculos
Descrição: Escreva um programa que calcule o valor do IMC (Índice de Massa Corporal).
A fórmula é: IMC = peso / (altura * altura)

Receba o peso e a altura do usuário.
Exiba o IMC com no máximo 2 casas decimais.

*/

let peso = 84.00
let altura = 1.70
let imc = peso / (altura * altura)

console.log(`seu IMC é de ${imc.toFixed(2)}`)