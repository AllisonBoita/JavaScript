/* 7. Condicionais(if/else, switch, ternário)
Exercício 1:
Crie uma variável chamada nota e atribua um valor numérico a ela.

Se a nota for maior ou igual a 7, exiba "Aprovado".
Caso contrário, exiba "Reprovado".
    Exercício 2:
Use switch para verificar o dia da semana(números de 1 a 7).Exiba "Segunda-feira", "Terça-feira", ..., dependendo do número.

    Exercício 3:
Use o operador ternário para verificar se uma pessoa é maior de idade(idade >= 18).Exiba "Maior de idade" ou "Menor de idade". */

/* let nota = 9

if (nota >= 7){
    console.log('Aprovado')
} else {
    console.log('Reprovado')
} */

/* let diaSemana =  5

switch (diaSemana) {    
    case 1: {
        console.log('Segunda-Feira')
        break
    }
    case 2: {
        console.log('Terça-Feira')
        break
    }
    case 3: {
        console.log('Quarta-Feira')
        break
    }
    case 4: {
        console.log('Quinta-Feira')
        break
    }
    case 5: {
        console.log('Sexta-Feira')
        break
    }
    case 6: {
        console.log('Sábado')
        break
    }
    case 7: {
        console.log('Domingo')
        break
    }
    default:
        console.log('Insira um número válido')
        break
}
 */

let idade = 19

let resultado = idade >= 18 ? 'Maior de Idade' : 'Menor de Idade'
console.log(resultado)