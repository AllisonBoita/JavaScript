const defaultUserNumbers = [
  2, 4, 5, 7, 9, 10, 11, 13, 14, 15, 16, 20, 22, 24, 25,
]

function init () {
  document.getElementById('user-numbers').value = defaultUserNumbers
}

function checkNumbers() {
  const userNumbers = document
    .getElementById('user-numbers')
    .value.split(',')
    .map(Number)
  const drawnNumbers = document
    .getElementById('drawn-numbers')
    .value.split(',')
    .map(Number)

  const correctNumbers = userNumbers.filter((num) => drawnNumbers.includes(num))
  const resultDiv = document.getElementById('result')

  if (correctNumbers.length >= 1) {
    resultDiv.innerHTML = `
            <p class="correct-numbers"> Números Corretos: ${correctNumbers}</p>
            <p class="total">Total de acertos: ${correctNumbers.length}</p>`
  } else {
    resultDiv.innerHTML = `<p class="erro">Você não ganhou</p>`
  }
}
