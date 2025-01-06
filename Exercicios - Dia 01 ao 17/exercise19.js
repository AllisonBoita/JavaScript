/*

Reverter um array:

Crie uma função que receba um array e retorne um novo array com os elementos na ordem inversa.
javascript
Copiar código
// Entrada: [1, 2, 3, 4]
// Saída: [4, 3, 2, 1]

*/

function reverteArray (...numeros) {
    return numeros.reverse()
}

const numeros = [4,5,8,9,10,1]
const resultado = reverteArray(...numeros)
console.log(resultado)