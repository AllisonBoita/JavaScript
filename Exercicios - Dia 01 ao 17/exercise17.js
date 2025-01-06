// Soma de elementos:

// Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaElementos(...numeros) {
    return numeros.reduce((total, numeroAtual) => total + numeroAtual, 0);
}

// Testando a função
const numerosSomados = [4, 2, 5, 3, 1];
const resultado = somaElementos(...numerosSomados);
console.log(resultado); // Saída: 15

