// Crie um array a partir de uma frase
// Imprima cada palavra do array no console por meio de um for

const frase = "O gato matou o rato"

const arrFrase = frase.split(" ")

console.log(arrFrase)

for(i in arrFrase){
    console.log(arrFrase[i])
}