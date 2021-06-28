function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[Erro] Verifique os dados e tente novamente!")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "CriançaHomem.png")
            }else if(idade < 21){
                img.setAttribute("src", "jovemHomem.png")
            }else if(idade < 50){
                img.setAttribute("src", "AdultoHomem.png")
            }else{
                img.setAttribute("src", "IdosoHomem.png")
            }
        }else{
            genero = "Mulher"
            if(idade >= 0 && idade < 10){
                img.setAttribute("src", "CriançaMulher.png")
            }else if(idade < 21){
                img.setAttribute("src", "JovemMulher.png")
            }else if(idade < 50){
                img.setAttribute("src", "AdultaMulher.png")
            }else{
                img.setAttribute("src", "IdosaMulher.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}