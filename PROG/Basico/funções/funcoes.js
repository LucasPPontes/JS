// Funções
function media(n1,n2){
    var media = (n1 + n2) / 2;
    return media // retorna o resultado da função e conseguimos armazenar em uma variável
}

var result1 = media(6,7);
console.log("Valor da média entre os números é igual a: "+ result1);

var result2 = media(10,6);
console.log("Valor da média entre os números é igual a: "+ result2);

function saudacao(){
    return "Olá mundo!"
}

var s = saudacao();
console.log(s);

// Função anonima
// Método 1:
var media2 = function(n3,n4){
    return(n3 + n4) / 2;
}
console.log(media2(5,6));

// Método 2
// arrow function
var media3 = (n5,n6) => {
    return(n5 + n6) / 2;
}
console.log(media3(5,7))