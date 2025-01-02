/*

Exercício 8: Switch/Case
Escreva um programa que receba o nome de uma fruta e exiba o preço correspondente:
maçã: R$ 3,00
banana: R$ 2,00
uva: R$ 4,50
Caso a fruta não esteja na lista, exiba: "Fruta não disponível".

*/

let fruta = 'uva'

switch (fruta){
    case 'maçã':
        console.log('O valor é R$ 3,00')
        break
    case 'banana':
        console.log('O valor é R$ 2,00')
        break
    case 'uva':
        console.log('O valor é R$ 4,50')
        break
    default:
        console.log('Fruta não disponível')               
}