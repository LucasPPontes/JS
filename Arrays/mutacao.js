// Mutação (Mutability)
// Um objeto pode herdar todas as características do outro, virando uma referência ao mesmo;

let objetoA = {
    pontos: 10
};

objetoB = objetoA;

let objetoC = {
    pontos: 10
};

console.log(objetoA == objetoB); // true
console.log(objetoA == objetoC); // false

objetoB.pontos = 20;

console.log(objetoA.pontos)
console.log(objetoB.pontos)


