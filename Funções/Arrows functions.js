// Arrow function bastante utilizada em frameworks modernos
// Não podemos trocar uma function por uma arrow function

const parOuImpar = (n) => {

    if(n % 2 == 0){
        return("Par")
    }
    else{
        return("Impar")
    }
}

console.log(parOuImpar(3));

let soma = (n1,n2) => {
    return(n1 + n2)
}

soma(1,1)

/* console.log(soma(1,1)); */

function soma2 (n1,n2){
    return(n1+n2)
}

// MAIS SOBRE ARROW FUNCTIONS

// Se só tem um parâmetro podemos remover os parênteses do argumento e o return;
// Se a expressão for pequena, pode até ser feita em uma linha sem prejudicar a leitura do código

console.log("-------------------------------------")
console.log("MAIS SOBRE ARROW FUNCTIONS")
console.log("-------------------------------------")

const raizQuadrada = (x) => {
    return x * x;
}

const raizQuadrada2 = x => x * x;

console.log(raizQuadrada(9))
console.log(raizQuadrada2(9))