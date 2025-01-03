// Quando trabalhamos com expressões ou condições que experam um resultado de valor booleano.

// Truthy e False (IF ELSE, Loop, Operadores Lógicos)

let texto = '' // Se ficar vazio é FALSY

if (texto) { // A condição só pode ser true or false.

// Nesse caso o IF verifica se o texto é verdadeiro (truthy). Quando eu crio a variável e adiciono algo
// ele considera como truthy  
  console.log('Existe um texto')
} else {
  console.log('Não existe texto.')
}

// Testando com outros dados

// let texto = 0 - FALSY
// let texto = null - FALSY
// let texto = NaN - FALSY
// let texto = undefined - FALSY

// let texto = numeros exceto zero - Truthy
// let texto = 'ola' - Truthy
// let texto = true - Truthy


// Operador Ternário (IF ELSE)

// Abreviando o IF e ELSE

// ----

let idade = 12

/* if (idade < 18){
  console.log('Menor de idade')
} else {
  console.log('Maior de idade')
} */

/* let resultado = idade < 18 ? 'Menor de idade' : 'Maior de idade'
console.log(resultado) */

// IF = ?
// ELSE = :

// ----

// Operador Ternário com Console.

idade < 18 ? console.log('Menor de idade') : console.log('Maior de idade')