function multiplicarTresNumeros(x,y,z){
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4))

const mult = multiplicarTresNumeros(5,4,8)

console.log("O valor de mult é " + mult)

function podeDirigir(idade,cnh){
    if(idade >= 18 && cnh == true){
        return("Pode dirigir")
    } 
    else{
        return("Não pode dirigir")
    }
}

user2 = podeDirigir(18,true)

console.log(user2)

/* console.log(podeDirigir(18,false))
console.log(podeDirigir(18,true)) */