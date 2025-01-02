/*

Exercício 2: Classificando a faixa etária
Descrição: Crie um programa que classifique a faixa etária de uma pessoa com base na idade. O programa deve verificar:

Se a pessoa tem menos de 18 anos (infantil).
Se a pessoa tem entre 18 e 64 anos (adulto).
Se a pessoa tem 65 anos ou mais (idoso).
Exiba a classificação da pessoa com base na idade inserida.

*/

let idade = 104

if (idade > 0){
    if (idade < 18){
        console.log('Sua faixa etária é Infantil')
    } else if (idade >= 18 && idade <= 64) {
        console.log('Sua faixa etária é Adulto')
    } else {
        console.log('Sua faixa etária é Idoso')
    }
} else {
    console.log('Insira uma idade válida')
}
