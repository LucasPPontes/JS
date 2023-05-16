let numeros = [1,2,3,4,5];

let nomes = ["João", "Maria", "Jesus"]

let bool = [true,false,true]

// array numeros
for(i in numeros){
    console.log(i) // capturando os índices
    console.log(numeros[i]) // capturando os elementos
}

// array nomes
for(i in nomes){
    let nome = nomes[i]
    
    if(nome == "Jesus"){
        console.log(`Olá ${nome}`)
    }
    else{
        console.log("Tchau")
    }
}

// array bool

console.log(bool[bool.length - 1]) // acessando o último elemento