p1 = document.getElementById("p1")

console.log(p1)

let paragrafos = document.getElementsByClassName("paragrafo")
console.log(paragrafos)

for(let p of paragrafos){
    console.log(p)
}

let todos_paragrafos = document.getElementsByTagName("p")
console.log(todos_paragrafos)