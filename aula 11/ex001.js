var vel  = 39.5
console.log(`A velocidade do seu carro é ${vel}`)
console.log("Dirija sempre usando cinto de segurança!")
if(vel > 60){
    console.log(`você ultrapassou o limite de velocidade permitida. Multado!`)
}
else if(vel < 30){
    console.log(`Você estava abaixo do limite permitido na via. Multado!`)
}
else{
    console.log("Dentro do limite da via!, Dirija com segurança")
}
