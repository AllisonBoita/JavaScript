// IF ELSE com o NOT Operator

let num1 = 10

if (!(num1 < 0)) {
  // Nega tudo isso. No caso tudo que for menor que zero é falso
  console.log('Favor digite um número positivo')
}

// NOT Operador com usuario

let usuarioLogado = false

// Forma anterior
/* if (usuarioLogado) {
  console.log('Voce está logado')
} else {
  console.log('Voce precisa de permissão')
} */

// Forma Abreviada

if (!usuarioLogado) {
  // Ele nega o true, nesse caso.
  console.log('Voce precisa estar logado')
}

// NOT Operator verificando itens em uma lista

// Forma anterior
let lista = ['carne', 'papel']
/* if (lista.length > 0) {
  console.log('Sua lista tem itens')
} else {
  console.log('A lista esta vazia')
} */

// Forma abreviada

if (!lista.length) {
  console.log('A lista está vazia')
}
