/* Faça uma estrutura if/else para verificar se um usuário pode dirigir;
Armazene em variáveis algumas informações sobre o usuário: idade, se tem cnh
Se a idade for maior que 18 e não possuir uma cnh, exiba uma mensagem
Se a idade for maior que 18 e tem cnh, exiba uma mensagem
Se não tiver 18 nem cnh exiba outra mensagem */

let idade = 17
let possuiCNH = true

if (idade >= 18 & possuiCNH == true){
    console.log("Pode dirigir")
}
else if (idade < 18){
    console.log("Não pode dirigir")
}

else if (idade >= 18 & possuiCNH == false){
    console.log("Não pode dirigir")
}