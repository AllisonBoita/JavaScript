/*

1. Trabalhando com Variáveis e Tipos de Dados
Descrição: Crie um programa que receba o nome de um produto, sua quantidade e seu preço. Calcule o valor total e exiba uma mensagem como:
"Você comprou X unidades de Produto Y por R$ Z", onde X, Y e Z são os valores inseridos pelo usuário.

*/

let nomeProduto = 'Maça'
let quantidadeProduto = 3
let precoProduto = 2.50

valorTotal = quantidadeProduto * precoProduto
console.log(`Você comprou ${quantidadeProduto} unidades de Produto ${nomeProduto} por R$ ${valorTotal.toFixed(2)} reais`)