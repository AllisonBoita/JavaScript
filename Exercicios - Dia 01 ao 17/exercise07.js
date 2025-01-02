/*

Exercício 7: Not Operator
Crie um programa que verifique se uma variável chamada email está vazia ou não.
Caso esteja vazia, exiba "Por favor, preencha o email".
Caso contrário, exiba "Email cadastrado com sucesso".

*/

let email = "Teste" // Um valor vazio, para simular a ausência de email

if (!(email)) { // Verifica se a variável email está vazia (ou qualquer valor falsy)
    console.log('Por favor, preencha o email')
} else {
    console.log('Email cadastrado com sucesso')
}