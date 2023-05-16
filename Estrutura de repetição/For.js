// for(variável, condição, incremento ou decremento(opcional))
for(let i = 0; i < 100; i = i + 3){ 
    console.log(`A soma de ${i} com 2 é: ${i + 2}`);
}

elementos = ["E1","E2"]

for(i of elementos){
    console.log(`Elemento ${i}`)
    
    if(i == "E1"){
        console.log(i)
    }
    else{
        console.log("Nada aqui")
    }
}