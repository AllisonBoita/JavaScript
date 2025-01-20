// Concatenando array

let numbers = [2,3,4,5]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters)
half = all.slice(3,5)

console.log(all)
console.log(half)

// Utilizando o Join Array

let clientes = ['Allison', 'Maria', 'Bruno', 'Cleiton']
console.log(clientes)

let clientesJoin = clientes.join(', ') // Serve para adicionar qualquer coisa à uma array ou converter para string
console.log(clientesJoin)

// Revertendo a sua array

clientes.sort()
console.log(clientes)

// Verificando elementos numa array

const tempChapeco = [18, 13, 8, 2]

const tempPositive = tempChapeco.every(function(value){
    return value >= 0
}) // chega todos os valores dentro da array

console.log(tempPositive)