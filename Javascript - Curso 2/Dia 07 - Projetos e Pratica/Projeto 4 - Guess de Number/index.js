let computerNumber
let userNumbers = []
//let attempts = 0

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1)   // Gera um numero randomico e arredonda por causa do floor.
    //console.log(computerNumber)
}

function registerNumbers(){
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' ' + userNumber) // pegue os números e adicione à array userNumbers
    document.getElementById('guesses').innerHTML = userNumbers

    if (userNumber > computerNumber) {
        document.getElementById('textOutput').innerHTML = 'Seu numero é maior que o número escolhido pelo computador'
        document.getElementById('inputBox').value = ''
        //attempts++
        //document.getElementById('attempts').innerHTML = attempts
        document.getElementById('attempts').innerHTML = userNumbers.length
    } else if (userNumber < computerNumber){
        document.getElementById('textOutput').innerHTML = 'Seu numero é menor que o número escolhido pelo computador'
        document.getElementById('inputBox').value = ''
        //attempts++
        //document.getElementById('attempts').innerHTML = attempts
        document.getElementById('attempts').innerHTML = userNumbers.length
    } else {
        document.getElementById('textOutput').innerHTML = 'Você acertou!'
        //attempts++
        //document.getElementById('attempts').innerHTML = attempts
        document.getElementById('attempts').innerHTML = userNumbers.length
    }
}

// Na aula foi repassada a forma de incrementar a tentativa de attempts em todos os ifs, porém notei que da forma feita em código o resultado é o mesmo.