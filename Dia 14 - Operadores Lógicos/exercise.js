// Criar sistema de autenticação que valida condições antes de permitir acesso.

let usuarioValido = true
let senhaCorreta = true
let temPermissao = true

// Todas boolean

// Mensagens:
// Acesso Permitido!
// Acesso negado. Usuario sem permissao
// Senha incorreta. Tente novamente
// Usuario não encontrado

/* if (usuarioValido && senhaCorreta && temPermissao) {
  console.log('Acesso permitido')
} else if (usuarioValido && senhaCorreta && temPermissao === false) {
  console.log('Acesso negado. Usuario sem permissão')
} else if (usuarioValido && senhaCorreta === false && temPermissao) {
  console.log('Senha incorreta. Tente novamente')
} else if (usuarioValido === false && senhaCorreta && temPermissao) {
  console.log('Usuario não encontrado')
} else {
  console.log('desista')
}
 */
// OU

if (usuarioValido) {
  if (senhaCorreta) {
    if (temPermissao) {
      console.log('Acesso Permitido')
    } else {
      console.log('Acesso negado. Usuario sem permissão')
    }
  } else {
    console.log('Senha incorreta. Tente novamente')
  }
} else {
  console.log('Usuario não encontrado')
}
