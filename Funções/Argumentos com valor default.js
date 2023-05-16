//Argumentos com valor default
//Podemos pre-determinar um valor para um argumento

function repetirFrase(frase, n=2) {
    for(let x=1; x <= n; x++){
        console.log(frase, " " + x)
    }
}

repetirFrase("testando",5)
repetirFrase("testandoDNV")