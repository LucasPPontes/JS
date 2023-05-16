var aluno = { 
    nome: "João", 
    notas: [
        7.5,
        8.9,
        5.5
    ] 
};

console.log("TESTE -- " + aluno.notas)

var novapropriedade = "sobrenome";

aluno.matricula = 12345;

aluno[novapropriedade] = "da Silva";

console.log(aluno.sobrenome);

console.log(aluno);
// Pode-se criar objetos dessa forma: 

var aluno2 = new Object({
    nome: "José",
    notas: [, 6.5]
});
console.log(aluno2.nome);
console.log(aluno.notas);


// Métodos: quando um objeto possui uma função
var aluno3 = new Object({
    nome: "Jorge",
    notas: [8, 9],

    media: function(n1, n2){
        return(n1 + n2) / 2;
    }

})

console.log(aluno3.nome);
console.log(aluno3.media(aluno3.notas[0],aluno3.notas[1]));