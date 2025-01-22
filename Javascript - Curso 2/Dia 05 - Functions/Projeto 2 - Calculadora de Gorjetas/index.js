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
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split
    
    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = ajusteValor(tipValue)
    document.getElementById('totalWithTip').innerHTML = ajusteValor(billTotal)
    document.getElementById('splitValue').innerHTML = formatPerson(split)
    document.getElementById('billEach').innerHTML = ajusteValor(billEach)
}