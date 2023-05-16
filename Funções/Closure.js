// Uma função que se lembra do ambiente que ela foi criada
// Basicamente é uma função que retorna outra função

function lembrarSoma(x) {
    return function(y) {
        return x + y
    }
}

let soma1 = lembrarSoma(2)

console.log(soma1(4))

let soma2 = lembrarSoma(5)

console.log(soma2(7))

function contador(i){
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();