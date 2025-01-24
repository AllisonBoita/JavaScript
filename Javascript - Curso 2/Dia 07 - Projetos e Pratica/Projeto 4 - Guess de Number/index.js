let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 5
const maxComputerNumber = 100

function newGame(){
    window.location.reload()
}

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1)   // Gera um numero randomico e arredonda por causa do floor.
    console.log(computerNumber)
}

function registerNumbers(){
    const userNumber = Number(document.getElementById('inputBox').value)

    if (userNumber <= maxComputerNumber){
        userNumbers.push(' ' + userNumber) // pegue os números e adicione à array userNumbers
        document.getElementById('guesses').innerHTML = userNumbers
    } else {

    }

    if (attempts < maxGuesses){

        if (userNumber > computerNumber && userNumber < maxComputerNumber) {
            document.getElementById('textOutput').innerHTML = 'Seu numero é maior que o número escolhido pelo computador'
            //document.getElementById('attempts').innerHTML = userNumbers.length
        } else if (userNumber < computerNumber){
            document.getElementById('textOutput').innerHTML = 'Seu numero é menor que o número escolhido pelo computador'
            //document.getElementById('attempts').innerHTML = userNumbers.length
        } else if (userNumber > maxComputerNumber){
            document.getElementById('textOutput').innerHTML = 'Número é inválido! Dígite um número menor ou igual à 100'
        } else {
            document.getElementById('textOutput').innerHTML = 'Você acertou!'
            //document.getElementById('attempts').innerHTML = userNumbers.length
            document.getElementById('inputBox').disabled = true
        }

        document.getElementById('inputBox').value = ''
        attempts++
        document.getElementById('attempts').innerHTML = attempts

    } 

    if (attempts === maxGuesses && userNumber !== computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Você perdeu! O número do computador era ' + computerNumber;
        document.getElementById('inputBox').disabled = true;
    }

}

// Na aula foi repassada a forma de incrementar a tentativa de attempts em todos os ifs, porém notei que da forma feita em código o resultado é o mesmo.