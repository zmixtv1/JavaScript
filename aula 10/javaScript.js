var a = window.document.getElementById("area")
a.addEventListener("click", clicar)
a.addEventListener("mouseenter", entrar)
a.addEventListener("mouseout", sair)

function clicar(){
    a.innerText = "clicou!"
    a.style.background = "red"
}

function entrar(){
    a.innerText="Entrou!"
}
function sair(){
    a.innerText="Saiu!"
    a.style.background = "rgb(23, 216, 152)"
}