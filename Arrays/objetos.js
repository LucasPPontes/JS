// Objetos
// Uma coleção de propriedades, parecidos com arryas
// Podemos acessar essas propriedades

let pessoa = {
    nome: "Lucas",
    profissao: "Cientista de dados",
    idade: 22
}

console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(pessoa.idade);

let carro = {
    ano: 2010,
    modelo: "sedan",
    
    andar: function(){
        console.log("andando...")
    }
}

console.log(carro.ano);
console.log(carro.modelo);
carro.andar()
// [] > array
// {} > objeto