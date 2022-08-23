let num = [6,8,5,7,4,8]
num.sort()
console.log(num)
/*
console.log(`o vetor tem ${num.length} posições`)
console.log(`O Primeiro valoer é ${num[0]}`)
/*
/*for(let pos = 0; pos<num.length;pos++){
    console.log(`${pos+1} Posição tem o valor ${num[pos]}`)
}
*/
for(let pos in num){
    console.log(`${pos} Posição tem o valor ${num[pos]}`)
}

console.log(num.indexOf(8))