// Objects and Key Pairs

// Arrays = Objects (Armazenar mais de uma informação dentro de uma variável)

// ouraAllisonInfo = [9.7, 7.53, '86%', 59, 84] // Arrays

const ouraAllisonInfo = { // Dessa forma, com objects, você entende à qual informação o dado pertence.
  totalSleep: 7.53,
  timeInBed: 9.7,
  sleepEfficiency: 86,
  restingHeartRate: { // Como aninhar informações no objeto
    minorRestingHeartRate: 59,
    majorRestingHeartRate: 98
  },
  sleepScore: 84,
  notes: ['Coffee', 'Drink', '30 Minutes Reading']
}

/* console.log(ouraAllisonInfo) // Acesso ao objeto completo
console.log(ouraAllisonInfo.sleepScore) // Acesso a algo específico no objeto
console.log(ouraAllisonInfo['totalSleep']) // Outras formas de acesso

ouraAllisonInfo.remSleep = '2h35m' // Adicionando nova property

ouraAllisonInfo.sleepScore = 90 // Alterando valor
ouraAllisonInfo['sleepScore'] = 91 // Alterando valor
ouraAllisonInfo.sleepScore++ // Alterando valor com operador
ouraAllisonInfo['sleepScore'] += 4 // Alterando valor com operador */

console.log(ouraAllisonInfo.notes[1])
console.log(ouraAllisonInfo.restingHeartRate.majorRestingHeartRate) // acessando informação de objetos aninhados.
console.log(ouraAllisonInfo['sleepScore'])
console.log(ouraAllisonInfo) // Acesso ao objeto completo

// Adicionando listas ao Objeto.

