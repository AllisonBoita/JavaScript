// Functions - Funções!

// Organizar o código em blocos.


// Função: Definindo e Declarando uma função. Em parênteses encontram-se os parâmetros
function somar(num1, num2){
  // console.log(num1 + num2)
  // or
  return num1 + num2
}

// Chamando a função / Invoking (Invoke)
let resultado = somar(4, 9) // Aqui os números se chamam argumentos
console.log(resultado)



// Variaveis dentro de uma função

// Os parâmetros pertencem somente à função onde são usados. Neste caso usei o mesmo nome de variável(parâmetros)
// nas duas funções e não tive problemas.

function subtrair(num1, num2) {
  console.log(num1 - num2)
}

subtrair(10, 5)

// Toda vez que utilizo o RETURN ele deve ser a última linha. Nada abaixo dele é executado.

// ---

// Parametros Padrão

function calcularTotal(preco, desconto){ // Ou setar o valor do parâmetro aqui
  let valorDesconto = preco * desconto
  let totalCompra = preco - valorDesconto
  return totalCompra
}

console.log(calcularTotal(100, 0.1)) // Posso definir o valor do parâmetro aqui

// -----

function calcularTotal(preco, desconto = 0.2) { // Ou setar o valor do parâmetro aqui
  let valorDesconto = preco * desconto
  let totalCompra = preco - valorDesconto
  return totalCompra
}

console.log(calcularTotal(100)) // Posso definir o valor do parâmetro aqui


// -------------------

// Parametros Rest

function listaCompras(...itens){ // Não sei a quantidade de parâmetros que vou passar
  console.log(itens)
  console.log('Itens da minha lista: ' + itens)
}

listaCompras('Pao', 'Carne', 'Arroz', 'Laranja')