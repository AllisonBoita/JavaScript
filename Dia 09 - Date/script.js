// Data e Hora (Date)

let agora = new Date()
console.log(agora)

let dataEspecifica = new Date(2024, 5, 20, 10, 35, 0) // Ano, Mês (começa no 0), Dia, Hora, Minuto e Segundo
console.log(dataEspecifica)

let dataString =  new Date('2024/10/20 10:35:00')
console.log(dataString)

// Os metodos do Date

let data = new Date()
/* console.log(data.getDate()) // Pegar dia do mês
console.log(data.getDay()) // Dia da semana (0 é domingo) 
console.log(data.getMonth()) // Mês (Janeiro inicia em 0)
console.log(data.getFullYear()) // Ano
console.log(data.getHours()) // Horas */

// Configurando os métodos do Date

data.setDate(25) // Atribuindo nova data
console.log(data.getDate())

data.setMonth(2)
console.log(data.getMonth())

// Para capturar utilizamos o GET. para configurar utilizamos o SET.

// Criar um contador de dias para uma data específica. Inicio e Fim. Quero saber a diferença de dias.

let dataInicio = new Date ('2022/12/25')
let dataFim = new Date ('2024/12/31')

let diferencaDias = (dataFim - dataInicio) / (1000 * 3600 * 24) // Milisegundos, Minutos e horas
console.log(diferencaDias) // Valor em milisegundos
