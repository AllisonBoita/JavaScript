/*

Exercício 10: Desafio - Todos os Conceitos Juntos
Crie um programa que:
Solicite o nome, a idade e uma lista de 3 hobbies de um usuário.
Verifique se o usuário tem mais de 18 anos e exiba uma mensagem personalizada, como: "Olá [nome], você tem [idade] anos e é maior de idade."
Mostre a lista de hobbies concatenada com outra lista fixa (ex.: ["correr", "ler"]).
Exiba a data e hora em que os dados foram registrados no formato DD/MM/YYYY HH:MM:SS.

*/

let nome = 'Allison'
let idade = 25
let hobbies = ['Ler', 'Jogar', 'Assistir']
let data = new Date()

data = Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }
).format(data)


if (idade >= 18){
    console.log(`Olá, ${nome}! Você tem ${idade} anos e é maior de idade.`)
} else {
    console.log('Você não é maior de idade!')
}

console.log(`Os hobbies de ${nome} incluem: ${hobbies.join(', ')}`) // Exibindo os hobbies de forma mais legível
console.log('Data de registro dos hobbies: ' + data)