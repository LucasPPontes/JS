/* Verifique se um número é primo */

let num = 5
divisoes = 0

for(let i = 0; i <= num; i++){

    console.log(i)

    if(num % i == 0) {
        divisoes ++;

    }
}

if(divisoes == 2 ){
    console.log(`O número ${num} é primo`)
}else{
    console.log(`O número ${num} não é primo`)
}