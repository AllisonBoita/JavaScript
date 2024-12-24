/* Exercício 2: Conversão de tipos
Crie um script que:

Peça ao usuário para digitar um número usando prompt.
Converta o valor para number e mostre o dobro desse número no console.
Mostre uma mensagem de erro caso o usuário não digite um número válido.
Exemplo:

// Entrada do usuário: "5"
// Saída no console: "O dobro do número é: 10"

// Entrada do usuário: "abc"
// Saída no console: "Erro: Não é um número válido." */

let digitaNumero = prompt('Digite um número: ')

let numeroDigitado = Number(digitaNumero)

if (!isNaN(numeroDigitado)) {
  console.log('O dobro do número é: ', numeroDigitado * 2)
} else {
  console.log('Não é um número')
}
