// Podemos converter o JSON para uma string de forma fácil
// Ou também uma string para JSON

const car = {
    "brand": "BMW",
    "whells": 4,
    "doors": 2, 
    "type": "Sedan"
};

let jsonToString = JSON.stringify(car);

console.log(jsonToString);

let stringToJson = JSON.parse(jsonToString);

console.log(stringToJson)