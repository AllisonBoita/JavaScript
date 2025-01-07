// Functions (aninhada)

/* function saudacao(nome){
  function mensagem(){
    console.log('Olá, ' + nome)
  }
  return mensagem()
}

saudacao('Allison') */

// Funções Nested com exemplo

// Criar um app para gerar os 6 números da mega-sena

function gerarNumeros(){
  console.log(Math.floor(Math.random() * 60)) + 1
}

function agrupaNumeros(){
  gerarNumeros()
  gerarNumeros()
  gerarNumeros()
  gerarNumeros()
  gerarNumeros()
  gerarNumeros()
}

agrupaNumeros()

// Function Declaration - Associa o nome à função

// Function Expression - Associa à uma variável

function somar(num1,num2){
  return num1 + num2
}

console.log(somar(10,20))

const subtrair = function(num1, num2){
  return num1-num2
}

console.log(subtrair(10,5))

// A Arrow Function - Quando tenho apenas uma linha na function

const multiplicar = (num1, num2) => num1 * num2
console.log(multiplicar(2, 5))

// A Arrow Function sem o Implicity Return - Quando tenho mais de uma linha na function

const dividir = (num1, num2) => {
  console.log('Hello')
  return num1 / num2
}

console.log(dividir(10,2))
