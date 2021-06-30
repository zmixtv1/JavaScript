function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    //var hora = data.getHours()
    var hora = 17
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`  
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background="#e1a68d"
    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background="#628aaa"
    }else{
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background="#5e6266"
    }
}