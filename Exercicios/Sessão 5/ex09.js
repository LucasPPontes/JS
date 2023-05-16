/* Escreve um loop for ou while que exiba qual número é par ou ímpar
O contador deve iniciar em 0 e ir até 50 */

for(let i = 0; i <= 50; i ++){
    resto = i % 2
    if(resto == 1){
        console.log(i + " é Impar")
    }
    else if(resto == 0){
        console.log(i + " é Par")
    }
}