/*

3. Trabalhando com Datas
Descrição: Crie um programa que mostre:

A data e hora atual no formato: DD/MM/YYYY HH:MM:SS
A data de amanhã no formato: DD/MM/YYYY

*/

let dataAtual = new Date()
dataAtual = Intl.DateTimeFormat('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' }
).format(dataAtual)

let dataAmanha = new Date()

dataAmanha.setDate(dataAmanha.getDate() + 1)

dataAmanha = Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric'}).format(dataAmanha)

console.log(dataAtual)
console.log(dataAmanha)

// Como segundo parâmetro para formatação após o pt-BR posso setar as opções de digito para cada item que desejo formatar.