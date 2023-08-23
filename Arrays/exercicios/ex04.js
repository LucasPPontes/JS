// Adiciona a propriedade janelas no ônibus, com valor de 20
// delete a propriedade rodas
// imprima a propriedade janela no console

const onibus = {
    "rodas": 8,
    "limitePassageiros": 40,
    "portas": 2
};

delete onibus.rodas

onibus["janelas"] = 20
// ou onibus.janelas = 20

console.log(onibus.janelas)
