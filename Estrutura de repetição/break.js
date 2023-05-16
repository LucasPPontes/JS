let nome = "Lucas";

for(let i = 0; i < 10; i = i + 1){
    

    if(i == 3){
        nome = "João";
    }

    if(i == 5 && nome == "João"){
        console.log("Programa parando");
        break;
    }

    console.log(i)
}