/*

Exercício 6: Concatenando listas de objetos
Descrição: Crie duas listas de objetos, uma representando livros e a outra representando filmes. Cada objeto deve ter as propriedades nome e ano. O programa deve:

Criar duas listas: uma para livros e outra para filmes.
Concatenar as duas listas em uma única lista.
Exibir a lista concatenada no console.

*/

let livros = [
    {nome: 'oLivro1', ano: 2019},
    {nome: 'oLivro2', ano: 2008 },
]

let filmes = [
    { nome: 'filmes1', ano: 2019 },
    { nome: 'filmes2', ano: 2008 },
]

let y = livros.concat(filmes)
console.log(y)