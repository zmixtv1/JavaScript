
function calcular(){
    var txtv = window.document.getElementById("txtvel")
    var res = document.querySelector("div#res")
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} km/h </strong> <p>`
    
    if (vel > 60){
        res.innerHTML += `Você está <strong>Multado</strong> por execesso de velocidade!`
    }
    else if(vel < 30){
        res.innerHTML += `Você está <strong>Multado</strong> por estar abaixo da velocidade permitida!`
    }
    else{
        res.innerHTML += `Você está dentro do limite da via!`
    }
    res.innerHTML += `<p>Dirija sempre com o sinto de segurança`

}
