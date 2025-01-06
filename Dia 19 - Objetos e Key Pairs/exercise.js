// Objetos, Nested e Arrays

const biblioteca = {
  fantasia: [
    {anoPublicacao: 1954, autor: 'J.R.R Tolkien', titulo: 'O senhor dos anéis'},
    {anoPublicacao: 1997, autor: 'J.K Rowling', titulo: 'Harry Potter'}
  ],
  ficcaoCientifica: [
    {anoPublicacao: 1965, autor: 'Frank Herbert', titulo: 'Duna'},
    {anoPublicacao: 1951, autor: 'Isaac Asimov', titulo: 'Fundação'}
  ]
}

console.log(biblioteca);

// Biblioteca é o objeto principal
// Dentro tenho Fantasia e FiccaoCientifica que são as arrays.
// Dentro delas, tenho dois objetos em cada.