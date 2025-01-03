// Desafio Operador Ternário

/* let nota = 54
let avaliacao
 */
/* if (nota>= 90){
  avaliacao = 'Excelente'
} else if (nota >= 70){
  avaliacao = 'Bom'
} else if (nota >= 50) {
  avaliacao = 'Satisfatório'
} else {
  avaliacao = 'Insatisfatório'
}

console.log(avaliacao)
*/

// condicao ? valor_se_verdadeiro : valor_se_falso;

let nota =  30

let avaliacao =
  nota >= 90 ? 'Excelente' :
    nota >= 70 ? 'Bom' :
      nota >= 50 ? 'Satisfatório' :
        'Insatisfatório';

console.log(avaliacao); // Resultado: Excelente

/* let resultado = idade < 18 ? 'Menor de idade' : 'Maior de idade'
console.log(resultado)
*/