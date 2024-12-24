/* Exercício 3: Manipulando strings
Escreva um script que:

Crie uma string com o texto: "JavaScript é divertido!".
Exiba o comprimento da string no console.
Converta a string para maiúsculas e exiba no console.
Substitua a palavra "divertido" por "poderoso" e exiba no console.
Saída esperada no console:

O comprimento da string é: 22
Texto em maiúsculas: JAVASCRIPT É DIVERTIDO!
Texto modificado: JavaScript é poderoso! */

let texto = 'JavaScript é divertido!'
let tamanho = texto.length
console.log('O comprimento da string é: ', tamanho)

let textoMaiusculo = texto.toUpperCase()
console.log(textoMaiusculo)

let textoModificado = 'JavScript é poderoso!'
console.log(textoModificado)
