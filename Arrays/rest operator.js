// uma forma de uma função receber indefinidos parâmetros
// O operador rest vai virar um array
// O parâmetro é definido por: ...nome

function imprimirNumeros(...args){
    for(let i = 0; i < args.length; i ++){
        console.log(args[i])
    }
}

imprimirNumeros(1,2,3,4,5,6,7,8,9,10)