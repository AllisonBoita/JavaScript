let num1 = 1
let num2 = 2

let total = num1 + num2

console.log(++total) // Se eu incrementar assim ele já soma no resultado
console.log(total++) // Assim ele não soma, pq somou depois da exibição do total, tendo que ter mais um console.log
console.log(total)

///

/// Se eu quiser somar mais

num1 += 19
num1 /= 20 // dividir...
console.log(num1)

/// Operadores de Igualdade

let num3 = '1'
let num4 = 1

console.log(num3 === num4) // Strict (Tipo e Valor)
console.log(num3 == num4) // Lose (Apenas valor)

/// Operadores ternários

let driver = 90
let speed = driver > 10 ? 'Above' : 'Below'

console.log(speed)

// Operadores Lógicos

let idade = 2
let tituloEleitor = true

if (idade >= 18 && tituloEleitor){
    console.log('Pode votar')
} else if (idade >= 18 || tituloEleitor){
    console.log('Ainda não consegue')
} else{
    console.log('nem tenta')
}

// Operadores Lógicos com strings

let corCliente = 'white'
let corEstoque = 'black'
let corVendida = corCliente || corEstoque // Sempre considera primeiro o da esquerda

console.log(corVendida) // White

// Precedencia de Operadores

let num5 = (3+4) * 2
console.log(num5)

// Conditional Statements

let velMax = 25

if (velMax >= 110){
    console.log('Velocidade acima da média')
} else if (velMax >= 40 && velMax < 110) {
    console.log('Velocidade Ok')
} else {
    console.log('Muito abaixo')
}

// For Loop

// For (Var, Condição, Incremento)

for (i = 1; i <= 10; i++){
    console.log('Numero ', i)
}

// While loop 

j = 1 // A variavel vem pra fora do case

while (j <= 10){
    console.log('Numero ', j)
    j++ // O incremento vem pra cá
}

// A vantagem dele é que posso utilizar variaveis setadas anteriormente no programa.

// Do While

// Diferenças:
// - Condição fica abaixo. 
// - O Do While executa pra depois verificar.

k = 1

do {
    console.log('Numero ', k)
    k++
} while(k <= 10)


// For In Loop

// Analisa informações e valores dentro de um objeto.

const myCar = {
    model: 'BMW',
    year: 2005,
    km: 68000
}

for (let i in myCar)
    console.log(i, myCar[i])

// O i é a variável. Quando eu peço pra pegar o my car ele passa o que está dentro da informação.

// For Of Loop

// Em arrays usamos o of.

const friends = ['Ana', 'Marcos', 'Jose']

for (let i of friends)
    console.log(i)

// Adicionando break no while

j = 1 // A variavel vem pra fora do case

while (j <= 10) {
    if (j === 8) break
    console.log('Numero ', j)
    j++ // O incremento vem pra cá
}
