function aluno(nome,n1,n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function media() {
        return(this.nota1 + this.nota2) / 2
    }
}

var teste = new aluno("jose",1,10)
console.log(teste.nome)
console.log(teste.nota1)
console.log(teste.nota2)
console.log("A média é :" + teste.media())

/* function criarAluno(nome,n1,n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function() {
            return(this.nota1 + this.nota2) / 2;
        },
        maior: function() {
            if(this.nota1 > this.nota2){
                console.log("A nota maior foi" + this.nota1);
            }
            else{
                console.log("A nota maior foi " + this.nota2);
            }
        }
    }
}

var aluno = criarAluno("jose",1,3)
console.log(aluno.nome)
console.log(aluno.media())
console.log(aluno.maior())

var turma = [
    criarAluno("zé",2,3),
    criarAluno("cebolinha",5,7)
]

for (usuario of turma){
    console.log(usuario.nome)
} */

/* var calc_media = function(){
    return(this.nota1 + this.nota2) / 2
}



var turma = [
    {
        nome: "José",
        nota1: 9,
        nota2: 7,
        media: calc_media,
    },
    
]

var aluno = turma[1];

console.log(aluno)
console.log(aluno.media());
 */


