/* 5. Datas
Exercício:
Use o objeto Date para exibir a data atual no formato:
"Hoje é [dia]/[mês]/[ano]". */

let dataAtual = new Date()
dataAtual = Intl.DateTimeFormat('pt-BR').format(dataAtual)

console.log(`Hoje é ${dataAtual}`)