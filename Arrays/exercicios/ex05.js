// Crie um array com 5 nomes, incluindo o seu
// Verifique se o seu nome existe no array;
// Se existir imprima alguma mensagem no console

nomes = ["Lucas","João","Jesus"]

for(nome in nomes){
    console.log(nome)
    if(nomes[nome] == "Lucas"){
        console.log("MEU NOME ESTÁ AQUI!")
        
    } else{
        console.log("MEU NOME NÃO ESTÁ AQUI")
    }
}

// OU

if(nomes.includes("Lucas")){
    console.log("MEU NOME ESTÁ AQUI")
}