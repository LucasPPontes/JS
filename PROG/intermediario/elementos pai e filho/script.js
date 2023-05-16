window.onload = function(){
    let d1 = document.getElementById("d1")
    console.log(d1.children)

    let h1 = d1.children[0]
    console.log(h1)

    let p1 = d1.children[1]
    console.log(p1)

    let div1 = h1.parentElement
    console.log(div1)

    console.log(d1.parentElement)
}