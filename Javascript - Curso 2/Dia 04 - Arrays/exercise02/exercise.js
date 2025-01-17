// Desafio 02

// Não pode listar itens abaixo de 20 dolares.

let value = Number(prompt('Enter the product value: '))
console.log(value, typeof(value))

if (value >= 20){
    document.getElementById('result').innerHTML = ' Approved'
} else {
    document.getElementById('result').innerHTML = ' Reproved'
}2