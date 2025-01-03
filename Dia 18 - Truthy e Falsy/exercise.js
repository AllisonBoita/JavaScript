// Criar solução com Switch que retorne:
// hora < 12
// hora < 18
// hora >= 18
// A hora deve ser coletada do sistema local

let horaDia = new Date()
let horaAtual = horaDia.getHours()

switch (true) {
  case horaAtual < 12:
    console.log('Bom dia')
    break
  case horaAtual < 18:
    console.log('Boa tarde')
    break
  default:
    console.log('Boa noite')
}
