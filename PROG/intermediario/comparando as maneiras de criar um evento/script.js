function f(e){
    console.log("teste")
    console.log(e)
}

function f1(e){
    console.log("testef1")
    console.log(e.target)
}

window.onload = function(){
    let h1 = document.getElementsByTagName("h2")[0]

    h1.addEventListener("click",f1)
}