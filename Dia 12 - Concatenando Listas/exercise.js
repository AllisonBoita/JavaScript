/* Criar uma solução onde a lista Num1 e Num2 são mescladas, corrigidas e organizadas */

let num1 = [10,20,30,40,50]
let num2 = [90,80,70,60,50]
let result // criando variavel

num2.reverse().shift(0) // inverti a lista num2 e dei um shift no item 0 para remover o duplicado.
num1.push(num2) // fiz o push do array num2 para o num1
result = num1.flat() // o flat une as duas listas em um unico array
console.log(result) // printo o resultado

