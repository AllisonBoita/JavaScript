/*
Se a pontuação for 90 ou mais será exibido "Excelente!"
Se for 75 ou mais (mas menos que 90) sera "Muito bom!"
Para pontuações menores "Você pode melhorar"
*/

let pontuacao = 1

if (pontuacao >= 90) {
  console.log('Excelente!')
} else if (pontuacao >= 75) {
  console.log('Muito bom')
} else {
  console.log('Você pode melhorar')
}
