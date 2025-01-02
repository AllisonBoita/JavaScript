/*

Exercício 4: Verificando se um número é par ou ímpar
Descrição: Crie um programa que verifique se um número é par ou ímpar. O programa deve:

Receber um número do usuário.
Verificar se ele é par ou ímpar usando o operador módulo (%).
Exibir uma mensagem dizendo se o número é par ou ímpar.

*/

let numero = 22

let éPar = numero % 2

if (éPar == 0) {
    console.log('É par')
} else {
    console.log('É impar')
}