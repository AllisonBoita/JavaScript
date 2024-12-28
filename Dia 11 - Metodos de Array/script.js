// Arrays - Estrutura de dados que permite armazenar um conjunto de dados.

let cart = ['maca', 'laranja', 'agua', 'arroz']
//cart.push = 'Pera' // Adiciona item ao fim do array
//cart.pop() // Remove o ultimo item da lista
//cart.shift() // Remove o primeiro item da lista
//cart.unshift('Suco') // Adiciona o elemento ao inicio da array
//cart.sort() // Ele organiza os elementos em ordem alfabetica
let y

//y = cart.includes('maca') // Verifica se elemento existe no array
//y = cart.indexOf('agua') // Verifica a posição do item no array

//y = cart.slice(1, 3) //mostra os itens do array (de 0 até 1 nesse caso) ele não inclui o ultimo item
y = cart.splice(1, 3) //mostra os itens do array mas inclui o ultimo item desejado. o Splice altera o estado do cart.
// Ele retira do array os itens denominados
console.log(y)
console.log(cart)
