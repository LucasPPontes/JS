function receberDado(dado){
    if(typeof(dado) === "string"){
        console.log("string passada")
    }
    else if(typeof(dado) === "number"){
        console.log("Number passado")
    }
    else{
        console.log("Boolean passado")
    }
}

receberDado(1)
receberDado("a")
receberDado(true)