let computerNumber
let userNumbers = []

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1)   // Gera um numero randomico e arredonda por causa do floor.
}

function registerNumbers(){
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber) // pegue os números e adicione à array userNumbers
    document.getElementById('guesses').innerHTML = userNumbers

    if (userNumber > computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Seu numero é maior que o número escolhido pelo computador'
    } else if (userNumber < computerNumber){
        document.getElementById('textOutput').innerHTML = 'Seu numero é menor que o número escolhido pelo computador'
    } else {
        document.getElementById('textOutput').innerHTML = 'Você acertou!'
    }



}
