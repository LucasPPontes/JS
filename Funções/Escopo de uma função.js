let n = 10;

const numero = function(){
    let n = 25;
    console.log(n);
}

numero();
console.log(n);

// MAIS SOBRE OS ESCOPOS
console.log("-------------------------------------")
console.log("MAIS SOBRE OS ESCOPOS")
console.log("-------------------------------------")

console.log("UTILIZANDO 'var' ")
var num = 5;
console.log(num)

if(num > 4){
    var num = 6
    console.log(num)
}

console.log(num)

// obs: se declarar a variável com 'var' o ela tem seu valor alterado caso ocorra alguma condição, com 'let' e 'const' o valor da variável só é alterado dentro da condição

console.log("-------------------------------------")

console.log("Utilizando 'let' ")
let num2 = 5;
console.log(num2)

if(num2 > 4){
    console.log(num2)
}

console.log(num2)