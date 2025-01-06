/*

Filtro de palavras longas:

Crie uma função que receba um array de strings e retorne um novo array contendo apenas as palavras com mais de 5 caracteres.

*/

function palavrasLongas(...palavras) {
    return palavras.filter(palavra => palavra.length > 5);
}

// Testando a função
const frutas = ["maçã", "banana", "cereja", "abacaxi"];
const resultado = palavrasLongas(...frutas);
console.log(resultado); // Saída: ["banana", "cereja", "abacaxi"]
