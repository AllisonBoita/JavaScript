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
