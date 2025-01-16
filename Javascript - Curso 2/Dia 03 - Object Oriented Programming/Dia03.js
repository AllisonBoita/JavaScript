/* const book = {
    name: 'Atomic Habits',
    author: 'James Clear',
    pages: 306,
    bookChapters: {
        chap1: 'Teste',
        chap2: 'First Law'
    }
}

function printBook(){
    console.log('Printing...')
}

printBook()
console.log(book) */

// Funções dentro de um objeto

/* const book = {
    name: 'Atomic Habits',
    author: 'James Clear',
    pages: 306,
    bookChapters: {
        chap1: 'Teste',
        chap2: 'First Law'
    },
    printBook: function() {
        console.log('Printing...')
    }
}

book.printBook()
console.log(book) */

// Factory

// Usado quando tenho dois objetos parecidos e quero colocar eles num grupo. (factory)

// Cria objetos

/* function createBooks (name, author, pages){ // factory
    const book = {
        name: name,
        author: author,
        pages: pages,
        bookChapters: {
            chap1: 'Teste',
            chap2: 'First Law'
        },
        printBook: function () {
            console.log('Printing...')
        }
    }
    return book
}

const book1 = createBooks('Cem anos de Solidão', 'Gabriel Garcia Marques', 506)
const book2 = createBooks('Chapeuzinho Vermelho', 'Gabriel Garcia Marques', 450)

book1.color = 'White'

// Adicionando propriedade a somente um dos objetos

console.log(book1)
console.log(book2) */

// Constructor

// Construtor de objetos.

// Quando utilizamos o constructor utilizamos a primeira letra maiuscula, seguindo o padrão Pascal Case

/* function CreateBooks(name, author, pages) {
  // Constructor
  this.name = name
  this.author = author
  this.pages = pages
}

const book1 = new CreateBooks(
  'Cem anos de Solidão',
  'Gabriel Garcia Marques',
  508
)
console.log(book1)

document.getElementById('name').innerHTML = 'Allison'
document.getElementById('like').innerHTML = 'Bet'

function alterartexto() {
  document.getElementById('texto-normal').innerHTML = 'Novo texto'
} */

// Garbage collector

// Feature do JS onde não é necessário configurar a reserva de memória para uma variável.

/* let firstName =  'Allison'
console.log(firstName)
 */



// Built in Objects

// Tenho um array de números e quero trazer o menor.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// Math

let numeros = [2,5,10,21,1,35]
console.log(Math.max(...numeros)) // usando o spread
// Isso acontece porque o método Math.max() não aceita um array diretamente como argumento. Ele espera uma lista de números individuais.
