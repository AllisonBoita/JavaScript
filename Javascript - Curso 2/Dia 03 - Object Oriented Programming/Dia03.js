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

const book = {
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
console.log(book)