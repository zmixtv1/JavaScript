function contar(){
    var i = document.getElementById("txtnum")
    var f = document.getElementById("txtfim")
    var p = document.getElementById("txtpas")
    var res = document.getElementById("res")
    var inicio = Number(i.value)
    var fim = Number(f.value)
    var passo = Number(p.value)

    res.innerHTML=`você ecolheu inciar com ${inicio},terminar com ${fim}, de ${passo} em ${passo}!`
    res.innerHTML = "Contando:"

    for (var c = inicio;c <= fim;c += passo){
        res.innerHTML += ` ${c} \u{1F449}`
        if (c == fim){
            res.innerHTML+= " \u{1F3C1} "
        }
        if (passo == 0){
            alert("Digite um passo válido")
            res.innerHTML = "Digite Novamente"
            break
        }
        if(inicio == 0){
            res.innerHTML = "Impossível contar!"
        }    
    }
}