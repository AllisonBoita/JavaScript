/*

Exercício 9: Trabalhando com Métodos de Lista
Crie uma lista com os números: [5, 12, 8, 130, 44].
Filtre os números maiores que 10.
Multiplique todos os números filtrados por 2.
Exiba os resultados no console.

*/

let numeros = [5,12,8,130,44]

let y = numeros.filter(num => num > 10)
let numerosMultiplicados = y.map(num => num * 2)

console.log(numerosMultiplicados)