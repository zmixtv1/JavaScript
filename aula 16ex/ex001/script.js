let num = document.getElementById("num")
let Lista = document.getElementById("valores")
let res = document.getElementById("res")
let valores = []

function isNumber(n){
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}


function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}


function adicionar(){
    if(isNumber(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text = `valor ${num.value} adicionado`
        Lista.appendChild(item)
        res.innerHTML = ""
    }else{
        alert("Valor invalido! ou valor já encontrado na lista.")
    }
    num.value = ""
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert("Adicione valores antes de finalizar!")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        for(let pos in valores){
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    }
}