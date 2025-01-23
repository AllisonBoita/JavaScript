const cores = ['Red', 'Blue', 'Yellow', 'Purple', 'Gray', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color') // Retorna o primeiro elemento de um documento. 


// Escutar um clique no botão do index.html

/* btn.addEventListener('click', function(){
    // Utilizando o Math.floor para aredondar o array para um inteiro.
    const indiceAleatorio = Math.floor(Math.random() * cores.length) // Multiplicamos o número aleatório pelo número total de cores no seu array. Isso nos dá um número aleatório entre 0 e o número de cores (mas ainda com casas decimais).
    const corAleatoria = cores[indiceAleatorio] // Usamos o índice aleatório para acessar uma cor específica do array.

    document.body.style.background = corAleatoria // vai do documento e troca o background para...
})
 */

btn.addEventListener('click', function () {
    const randomColor = getRandomColor()
    document.body.style.background = cores[randomColor]
    // console.log(randomColor)
    color.textContent = cores[randomColor] // pegar o conteúdo do texto e associar.
})

function getRandomColor (){
    return Math.floor(Math.random() * cores.length)
}
