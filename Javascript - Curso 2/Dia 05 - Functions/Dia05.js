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
