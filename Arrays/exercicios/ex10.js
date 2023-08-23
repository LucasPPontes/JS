/* 
Crie uma calculadora, que tem os seguintes métodos: somar, subtrair, multiplicar e dividir
Os métodos só devem aceitar dois parâmetros
Utilize cada um dos métodos e imprima os valores no console

 */

const calculadora = {
    soma: function(a,b){
        return a + b
    },

    subtracao: function(a,b){
        return a - b
    },

    multiplicacao: function(a,b){
        return a * b
    },

    divisao: function(a,b){
        return a / b
    }

}

console.log(calculadora.soma(4,2))
console.log(calculadora.subtracao(4,2))
console.log(calculadora.multiplicacao(4,2))
console.log(calculadora.divisao(4,2))