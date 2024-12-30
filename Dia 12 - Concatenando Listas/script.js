// Todos os itens dentro da mesma array. Neste caso, quero puxar os itens da number para a mesma array do cart.

let cart = ['maca', 'laranja', 'agua', 'arroz']
let numbers = [1, 3, 5, 7, 14]
let y

//cart.push(numbers)
y = cart.concat(numbers)
console.log(y)