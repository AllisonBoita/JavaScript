function ajusteValor(value){
    value = Math.ceil(value * 100) / 100 // para ajustar último digito em casos de números
    value = value.toFixed(2)
    return '$ ' + value
}

function formatPerson(value){
    if (value == 1) return value + ' person'
    return value + ' peoples'
}

function update(){
    let conta = Number(document.getElementById('suaConta').value)
    let percentualGorjeta = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let valorGorjeta = conta * (percentualGorjeta / 100)
    let billTotal = conta + valorGorjeta
    let billEach = billTotal / split
    
    document.getElementById('percentualGorjeta').innerHTML = percentualGorjeta + ' %'
    document.getElementById('valorGorjeta').innerHTML = ajusteValor(valorGorjeta)
    document.getElementById('totalWithTip').innerHTML = ajusteValor(billTotal)
    document.getElementById('splitValue').innerHTML = formatPerson(split)
    document.getElementById('billEach').innerHTML = ajusteValor(billEach)
}