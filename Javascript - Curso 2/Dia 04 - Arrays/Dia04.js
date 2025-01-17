// Array - Adicionando valores

const numeros = [7,8,9,1,5]
numeros./*acesso aos metodos*/push(10,11,12)
numeros.unshift(21,22) // Adicionando valores ao inicio do array
numeros.splice(2/*a partir de onde vou incluir*/, 0 /*quero deletar algo?*/, 4,5,6)

console.log(numeros)

// Localizando arrays numa array

console.log(numeros.indexOf(9)) // verificando a localização
console.log(numeros.includes(35)) // verificando se existe