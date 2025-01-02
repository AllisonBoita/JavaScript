/*

4. Manipulando Listas
Descrição: Crie uma lista com os seguintes nomes: ["João", "Maria", "Carlos", "Ana"].

Adicione "Pedro" ao final da lista.
Remova "Carlos" da lista.
Ordene a lista em ordem alfabética.
Exiba a lista final no console.

*/

let listaNomes = ['João', 'Maria', 'Carlos', 'Ana']
console.log(listaNomes)

listaNomes.push('Pedro')
console.log(listaNomes)

listaNomes.splice(2,1)
console.log(listaNomes)

listaNomes.sort()
console.log(listaNomes)