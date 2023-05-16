/* maneiras de criar objeto */

/* criando através de uma variável*/
var objeto1 = {
    nome: "objeto1",
    numero: 45
}
console.log(objeto1.nome)
console.log(objeto1.numero)

/* criando através de uma função */

function objeto2(nome2,numero2){
    return{
        nome:nome2,
        numero:numero2
    }
}

var ob2 = objeto2("objeto2",1)
console.log(ob2.nome)
console.log(ob2.numero)

/* criando através de uma função e utilizando "this" dentro do objeto */
function objeto3(nome3,numero3){
    this.nome3 = nome3
    this.numero3 = numero3
    return(nome3,numero3)
}

/* Instânciando o objeto3 */
var ob3 = new objeto3("objeto3",45)
console.log(ob3.nome3)
console.log(ob3.numero3)

