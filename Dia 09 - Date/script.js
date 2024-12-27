// Data e Hora (Date)

let agora = new Date()
console.log(agora)

let dataEspecifica = new Date(2024, 5, 20, 10, 35, 0) // Ano, Mês (começa no 0), Dia, Hora, Minuto e Segundo
console.log(dataEspecifica)

let dataString =  new Date('2024/10/20 10:35:00')
console.log(dataString)

// Os metodos do Date

let data = new Date()
console.log(data.getDate()) // Pegar dia do mês
console.log(data.getDay()) // Dia da semana (0 é domingo) 
console.log(data.getMonth()) // Mês (Janeiro inicia em 0)
console.log(data.getFullYear()) // Ano
console.log(data.getHours()) // Horas