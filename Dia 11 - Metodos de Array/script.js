// Arrays - Estrutura de dados que permite armazenar um conjunto de dados.

let cart = ['maca', 'laranja', 'agua', 'arroz']
let numbers = [1, 3, 5, 7, 14]
//cart.push = 'Pera' // Adiciona item ao fim do array
//cart.pop() // Remove o ultimo item da lista
//cart.shift() // Remove o primeiro item da lista
//cart.unshift('Suco') // Adiciona o elemento ao inicio da array
//cart.sort() // Ele organiza os elementos em ordem alfabetica
//let y

//y = cart.includes('maca') // Verifica se elemento existe no array
//y = cart.indexOf('agua') // Verifica a posição do item no array

//y = cart.slice(1, 3) //mostra os itens do array (de 0 até 1 nesse caso) ele não inclui o ultimo item
//y = cart.splice(1, 3) //mostra os itens do array mas inclui o ultimo item desejado. o Splice altera o estado do cart.
// Ele retira do array os itens denominados
//console.log(cart)

// Realizando Chain (corrente)

//y = cart.splice(1, 3).sort().includes('agua') // adicionando mais de um metodo
//console.log(y)

// Aninhamento no Javascript

let y
cart.push(numbers) // adicionando uma array dentro de outra
console.log(cart)

y = cart[4][1] // o primeiro é o index. como tenho 4 itens e inicia de 0, o 4 não é usado. chamo ela e na sequencia a posição
// do segundo array
console.log(y)


/* let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];
frutas.splice(1, 1); // Remove o item na posição 1 (Banana)
console.log(frutas); // Saída: ['Maçã', 'Laranja', 'Uva']
 */