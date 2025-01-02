/*

Exercício 1: Calculando o valor de uma compra
Descrição: Crie um programa que calcule o valor total de uma compra de vários itens. O programa deve:

Receber o nome de três produtos, suas quantidades e preços.
Calcular o valor total de cada produto (quantidade * preço).
Exibir uma mensagem com o nome do produto, a quantidade e o valor total.

*/

let produtos = [
    { nome: 'Maçã', quantidade: 3, preco: 2.50 },
    { nome: 'Banana', quantidade: 2, preco: 1.80 },
    { nome: 'Uva', quantidade: 1, preco: 4.00 }
];

// Calculando o valor total de cada produto
produtos.forEach(produto => {
    let valorTotal = produto.quantidade * produto.preco;
    console.log(`Você comprou ${produto.quantidade} unidades de Produto ${produto.nome} por R$ ${valorTotal.toFixed(2)} reais`);
});
