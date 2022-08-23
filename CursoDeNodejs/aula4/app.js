const express = require("express");
const { Http2ServerRequest } = require("http2");
const app = express();



app.get("/", function(req,res){
    res.send("Seja Bem Vindo ao meu app!!")
})

app.get("/sobre", function(req,res){
    res.send("Minha pagina Sobre")
})

app.get("/Blog", function(req,res){
    res.send("Bem Vindo ao meu Blog")
})

app.listen(8081, function(){
    console.log("Servidor Rodando na rede 8081")
});

