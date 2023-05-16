function nomeComIdade(nome,idade){
    
    if(nome == undefined & idade == undefined){
        return("Essa função precisa de pelo menos um argumento!")
    }
    if(idade == undefined){
        return("sua idade é " + idade)
    }

    else {
        return("Seu nome é " + nome + " e você tem " + idade + " anos")
    }
}

console.log(nomeComIdade("lucas", 22))
console.log(nomeComIdade("lucas"))
console.log(nomeComIdade())