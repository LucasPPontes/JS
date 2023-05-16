let p = document.getElementById("p1")

p.innerHTML = "Novo conteúdo"
p.innerText = "Conteúdo mais novo"
p.textContent = "Mais novo ainda"

/* mudando nome da classe do elemento */
p.className = "teste"
p.style = "color:blue"

let meuAtt = p.getAttribute("meuAtt")
console.log(meuAtt)

let setNovoAtributo = p.setAttribute("meuAtt","NovoAtributo")
console.log(p)