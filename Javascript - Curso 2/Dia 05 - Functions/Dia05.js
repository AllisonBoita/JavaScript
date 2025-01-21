// Function Declaration

function novaFuncao(){
    console.log('Filmes')
}

novaFuncao()

// Function Expression

const car = function(){
    console.log('Tesla')
} // Sem dar nome a ela

car()

// Utilizando os Argumentos em funções

function somaValores(){
    let total = 0
    for (let i of arguments) // verifique os argumentos
    // Quando eu uso o arguments não preciso definir os argumentos no inicio.
        total += i
    return total
}

console.log(somaValores(10,20,30,40))

// Configurando parametros default


// exemplo 

/* function calculaFinanciamento(loan, rate, years){
    return (loan * rate / 100 * years) + loan
}

console.log(calculaFinanciamento(20000, 2.5, 5)) */

// correto
function calculaFinanciamento(loan, rate = 2.5, years=5) {
    return (loan * rate / 100 * years) + loan
}

console.log(calculaFinanciamento(20000))