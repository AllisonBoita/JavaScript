/*

Exercício 3: Filtrando números em um intervalo
Descrição: Crie um programa que filtre os números de um array, mantendo apenas os números que estão dentro de um intervalo específico (inclusive). O programa deve:

Criar um array com números inteiros.
Filtrar os números que estão dentro do intervalo de 10 a 50 (inclusive).
Exibir os números filtrados.

*/

let numerosAleatorios = [10,20,30,40,50,60,70,80,90,100]

let y = numerosAleatorios.filter(num => num >= 10 && num <= 50)
console.log(y)
