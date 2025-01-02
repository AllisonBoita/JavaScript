// O Switch e Case

// Dia 1 é domingo

let dia = 3

switch (
  dia // expressao
) {
  case 1:
    console.log('Domingo')
    break
  case 2:
    console.log('Segunda')
    break
  case 3:
    console.log('Terça')
    break
  case 4:
    console.log('Quarta')
    break
  case 5:
    console.log('Quinta')
    break
  case 6:
    console.log('Sexta')
    break
  case 7:
    console.log('Sabado')
    break

  default: // É tipo o ELSE
    console.log('Numero Invalido')
}

// Comparação: Switch e CASE
// Verificação: IF e ELSE

// Nivel de usuario no Sistema

let userLevel = 'admin'

// admin, guest or editor

switch (userLevel) {
  case 'admin':
    console.log('Full Access')
    break
  case 'guest':
    console.log('Guest Level')
    break
  case 'editor':
    console.log('Editor Level')
    break

  default:
    console.log('Sem acesso')
}
