    var num = document.getElementById("num")
    var mostrar = document.getElementById("mostrar")
    var res = document.getElementById("res")
    var numeros = []

function adicionar(){
    if (num.value.length == 0){
        window.alert("Por favor, Digite um número")
    }else{
        numeros.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `valor ${num.value} adicionado`
        mostrar.appendChild(item)
    }
    num.value = ""
    num.focus()
}

function calcular(){
    let total = numeros.length
    for(let pos in numeros){
        soma += numeros[pos]
    }
    media = soma/total
    res.innerHTML = ""
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}

