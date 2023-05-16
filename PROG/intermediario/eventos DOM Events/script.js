function changeItem1(input) {
    let h1 = document.getElementById("item1");
    h1.innerHTML = input.value;
}

function changeItem2(input){
    let h1 = document.getElementById("item2");
    h1.innerHTML = input.value;
}

function onOver(elemento){
    elemento.style.backgroundColor="red"
}

function onOut(elemento){
    elemento.style.backgroundColor="blue"
}

/* Mudando elementos pelo js */

function loaded(){
    let texto = document.getElementById("titulo")

     //texto.onclick = mudarTexto; //> ao clicar no elemento a função mudarTexto é chamada 

    texto.addEventListener("mouseover",mudarTexto) // quando o mouse passar por cima do elemento a função mudarTexto será chamada

    texto.addEventListener("mouseout",mouseOut)
}

function mudarTexto(){
    this.innerHTML = "Mouse dentro do elemento"
}

function mouseOut(){
    this.innerHTML = "Mouse fora do elemento"
}