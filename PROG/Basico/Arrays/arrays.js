var alunos = new Array(
    "joão",
    "Maria",
    "José",
    "Paula",
    "Jorge"
);

console.log(alunos);
var len = alunos.length;

console.log("tamanho da lista " + len)

for(i in alunos){ // utilizando in o for vai pegar o index do array
    console.log(alunos[i]);
}

for(var aluno of alunos){ // utilizando of o for vai pegar o valor do array
    console.log(aluno);
}