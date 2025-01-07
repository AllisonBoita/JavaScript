/* 6. Arrays e Métodos de Arrays
Exercício:

Crie um array com 5 números(por exemplo: [10, 20, 30, 40, 50]).
Adicione um número ao final do array.
Remova o primeiro número do array.
Encontre o maior número no array(use o método Math.max() com o operador spread).
Exiba o array resultante no console. */

let numeros = [10,20,30,40,50]
numeros.push(60)
numeros.shift()
let maior = Math.max(...numeros)

console.log(numeros)
console.log(maior)


/* O que o Spread faz no exemplo?
O operador spread (...) pega cada elemento do array e "espalha" como argumentos individuais para a função Math.max. No exemplo acima:

javascript
Copiar código
Math.max(...numeros);
É equivalente a fazer:

javascript
Copiar código
Math.max(20, 30, 40, 50, 60);
Sem o operador spread, se você passasse o array diretamente, ele não funcionaria, pois Math.max() não sabe lidar com arrays:

javascript
Copiar código
Math.max(numeros); // Retorna NaN */