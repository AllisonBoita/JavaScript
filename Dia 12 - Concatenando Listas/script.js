// Todos os itens dentro da mesma array. Neste caso, quero puxar os itens da number para a mesma array do cart.

/* let cart = ['maca', 'laranja', 'agua', 'arroz']
let numbers = [1, 3, 5, 7, 14]
let y

//cart.push(numbers)
y = cart.concat(numbers)
console.log(y)
 */


// Metodos estaticos

/*
let num1 = 10
let num2 = 20
let num3 = 30

let allMyNumbers = Array.of(num1,num2,num3) // Cria uma array baseada em variaveis.
// Quando associo o Array. consigo acessar os metodos estaticos da array.
console.log(allMyNumbers)

*/

// Arrays (Nested Arrays) - Criar uma array dentro de uma outra array sem o Nested

let numbers = [20,30,40,50, [21,22,23], 30,31,32, [40,41,42]]
console.log(numbers)

let y
y = numbers.flat() // O flat quebra os arrays e transforma em apenas uma lista
console.log(y)
