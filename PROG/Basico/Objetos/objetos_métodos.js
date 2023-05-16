function calc_media(n1,n2){
    return(this.notas[0] + this.notas[1]) / 2
}

// this > refere-se ao objeto

var aluno = new Object({
    nome: "José",
    notas: [5,10],

    media: calc_media
})

console.log(aluno.nome)
console.log(aluno.notas)

let media_out = aluno.media(aluno.notas[0],aluno.notas[1])

console.log("A média foi " + media_out)

var aluno1 = new Object({
    nome: "Jão",
    notas: [6,7],

    media: calc_media
})

console.log(aluno1.nome)
console.log(aluno1.notas)

let media_out1 = aluno1.media(aluno1.notas[0],aluno1.notas[1])

console.log("A média foi " + media_out1)
