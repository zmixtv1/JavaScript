pizza = 0

while (pizza != 8){
    if (pizza == 0){
        console.log("Comi uma fatia da pizza!")
    }else if(pizza==7){
        console.log("Comi o ultimo pedaço de pizza!")
    }
    else{
        console.log("Comi outra fatia da pizza!")  
    }
    pizza += 1
}
console.log(`Acabou a pizza, eu comi ${pizza} pedaços` )