// Concatenando array

let numbers = [2,3,4,5]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters)
half = all.slice(3,5)

console.log(all)
console.log(half)

// Utilizando o Join Array

let clientes = ['Allison', 'José', 'Maria']
console.log(clientes)

let clientesJoin = clientes.join(', ') // Serve para adicionar qualquer coisa à uma array ou converter para string
console.log(clientesJoin)