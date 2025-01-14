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

function createBooks (name, author, pages){ // factory
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
console.log(book1)
console.log(book2)