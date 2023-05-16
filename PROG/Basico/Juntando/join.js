var alunos = new Array(
    "José",
    "Ana",
    "Maria",
    "João"
);

var notasA = [
    10.0,
    6.7,
    5.5,
    4.3
];

var notasB = [
    5.7,
    7.6,
    5.6,
    5.4
];

function media(n1,n2){
    return(n1 + n2) / 2
};

function passou(media){
    if(media < 6){
        return "Reprovado"
    }
    else{
        return "Aprovado"
    }
    
};

for(var index in alunos){
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    console.log(
        alunos[index] + 
        " : " + 
        nota1 + 
        " > " + 
        nota2 + 
        " > Média = " + 
        media(nota1,nota2)+ 
        "--" +
        passou(nota1,nota2));  
};
