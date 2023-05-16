// Utilizado quando há a necessidade de vários ifs, podemos utilizar o switch/case
// Para sair de um case podemos utilizar o break
// Podemos inserir uma expressão default, para caso nenhum valor for correspondido 
// Obs: muitos programadores optam por usar vários ifs

let nome = "aaaa"

switch(nome){
    case "João":
        console.log("O nome é João");
        break;
    case "José":
        console.log("O nome é José");
        break;
    default:
        console.log("O nome não é João e nem José")

}