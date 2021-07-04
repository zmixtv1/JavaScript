/*
function contador(a,b){
    soma = a + b
    console.log(soma);
}

a = 2
b = 2
contador(a,b)
console.log(`A soma entre ${a} + ${b} é ${soma}`);
  
*/
 
function parimp(n){
    if(n%2==0){
        return "Par"
    }else{
        return "Impar"
    }
}

let res = parimp(11)
console.log(res);
