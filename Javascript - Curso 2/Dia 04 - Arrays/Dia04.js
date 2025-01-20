// Array - Adicionando valores

const numeros = [7,8,9,1,5]
numeros./*acesso aos metodos*/push(10,11,12)
numeros.unshift(21,22) // Adicionando valores ao inicio do array
numeros.splice(2/*a partir de onde vou incluir*/, 0 /*quero deletar algo?*/, 4,5,6)

console.log(numeros)

// Localizando arrays numa array primitiva

console.log(numeros.indexOf(9)) // verificando a localização
console.log(numeros.includes(35)) // verificando se existe

// Localizando itens numa array de referência

const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the future'},
    {id: 3, movieName: 'The Matrix'}
]

console.log(movies.find(function (movies){
    return movies.movieName == 'The Matrix'
})) // retorna o filme se for igual ao que esotu passando.

// Se for uma array de referência devemos utilizar o find

// Alterando a array acima por uma arrow function

console.log(movies.find(movies => movies.movieName == 'The Matrix')) // retorna o filme se for igual ao que esotu passando.

// removendo itens dum array

let num1 = [5,6,7,8]
// const num2 = num1.pop() // remove o ultimo numero da array
// const num3 = num1.shift() // remove o primeiro numero da array
const num4 = num1.splice(2,1) // a partir do index X remova tantos itens


console.log(num1)
// console.log(num2)
// console.log(num3)
console.log(num4)

// Esvaziando um array

num1 = []
num1.length = 0
num1.splice(0, num1.length) // remova do index 0 até o tamanho total da array
console.log(num1)


