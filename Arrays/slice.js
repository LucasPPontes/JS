// Retorna um array a partir de outro array
// O array retornado é determinado pelos parâmetros que são os índices de início e fim do novo array;

let numeros = [0,1,2,3,4,5];
let textos = ["a","b","c","d","e"];


console.log(numeros.slice(2,3)); // indice inicial até o final
console.log(numeros.slice(3)); // indice inicial até o final do array

console.log(textos.slice(2,3));
console.log(textos.slice(3));