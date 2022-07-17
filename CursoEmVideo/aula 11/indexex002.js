

function verif(){
    var nasci = window.document.querySelector("input#Nasc")
    var res = document.querySelector("div#res")
    var nascionalidade = String(nasci.value)

    res.innerHTML = `<p>Você nasceu em <strong>${nascionalidade}</strong> </p>`

    if (nascionalidade == "Brasil"){
        res.innerHTML +="Você é Brasileiro!"
    }
    else{
        res.innerHTML += "Você é Extrangeiro"
    }

}