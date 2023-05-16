// || operador "OR" "OU"
// && operador "AND" "E"

var a = "hello mundo!";

console.log(a);

var user = prompt("Digite sua idade: ");

// Condicionais IF/ ELSE/ ELSE IF
if(user < 18){
    console.log("Você não possui 18 anos");
}
else if(user >=18 && user <=70){
    console.log("Mostre a identidade");
}
else{
    console.log("Aprovado!");
    console.log("Qual seu pedido? ");
}

// operador Ternário
var check = user >=18 ? "OK" :"Não ok";
console.log(check);

// Condicionais Switch
var nota1 = parseFloat(prompt("Primeira nota: "));
var nota2 = parseFloat(prompt("Segunda nota: "));

media = (nota1 + nota2) / 2;
var conceito = "";

if(media >= 8){
    console.log("Passou com média " + media)
    conceito = "Ótimo"
}
else if(media >= 6){
    console.log("Passou com média " + media)
    conceito = "Bom"
}
else{
    console.log(media)
    conceito = "Regular"
}

switch(conceito){
    case "Ótimo":
        console.log("Parabéns você é um ótimo aluno!")
        break;
    case "Bom":
        console.log("Você é um bom aluno!")
        break;
    case "Regular":
        console.log("Estude mais um pouco")
        break;
    default:
        console.log("Houve algum erro")
        break;
}