let num1 = 1
let num2 = 2

let total = num1 + num2

console.log(++total) // Se eu incrementar assim ele já soma no resultado
console.log(total++) // Assim ele não soma, pq somou depois da exibição do total, tendo que ter mais um console.log
console.log(total)

///

/// Se eu quiser somar mais

num1 += 19
num1 /= 20 // dividir...
console.log(num1)

/// Operadores de Igualdade

let num3 = '1'
let num4 = 1

console.log(num3 === num4) // Strict (Tipo e Valor)
console.log(num3 == num4) // Lose (Apenas valor)