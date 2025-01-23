const cores = ['Red', 'Blue', 'Yellow', 'Purple', 'Gray', 'Green']
const btn = document.getElementById('btn')

// Escutar um clique no botão do index.html

btn.addEventListener('click', function(){
    // Pegar um iten da minha array e colocar como background do body html
    document.body.style.background = cores[1] // vai do documento e troca o background para...
})