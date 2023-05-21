// Podemos copiar todas as propriedades de um objeto para outro


let objetoA = {
    prop1: "teste",
    prop2: "testando"
}

let objetoB = {
    prop3: "propriedade"
}

console.log(objetoA)
console.log(objetoB)

Object.assign(objetoA, objetoB) // copiando propriedades do objetoB para o objetoA

Object.assign(objetoB, objetoA)// copiando propriedades do objetoA  para o objetoB

console.log(objetoA)
console.log(objetoB)