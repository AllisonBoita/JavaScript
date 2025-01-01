// IF e ELSE com Operadores Logicos (&& E, || OU)

/* // Criar um site de evento online.

let idade = 18
let registroOnline = true

if (idade >= 18 && registroOnline) {
  // Somente com o nome da variavel ele já considera como true
  console.log('voce pode acessar')
} else {
  console.log('sem acesso')
} */

// APP onde o candidato recebe desconto se for estudante ou tiver cupom

/* let estudante = false
let cupom = true

if (estudante || cupom) {
  console.log('voce tem cupom de desconto!')
} else {
  console.log('voce nao tem desconto')
}
 */

// APP para restaurante que oferece desconto para familias maiores que 4 E venham para almoçar na terça ou quarta.

/* let tamanhoFamilia = 4
let diaSemana = 'Terca'

if ((tamanhoFamilia >= 4 && diaSemana === 'Terca') || diaSemana === 'Quarta') {
  console.log('Tem desconto!')
} else {
  console.log('Volte outro dia ou traga mais pessoas')
}
 */

// Aninhamento do IF e Else
// Validar se nivel de jogo está completo e a pontuacao:

let nivelCompleto = true
let pontuacao = 100

if (nivelCompleto) {
  if (pontuacao >= 90) {
    console.log('Ouro')
  } else if (pontuacao >= 75) {
    console.log('Prata')
  } else {
    console.log('Bronze')
  }
} else {
  console.log('Termine o Nivel')
}
