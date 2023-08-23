// Junta elementos em um array em uma frase por meio de um separador

let frase = "O rato roeu a roupa do rei de roma"

let palavras = frase.split(" ")

let fraseMontada = palavras.join("<->");

console.log(fraseMontada)