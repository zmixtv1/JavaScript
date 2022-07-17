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
 /*
function parimp(n){
    if(n%2==0){
        return "Par"
    }else{
        return "Impar"
    }
}

let res = parimp(11)
console.log(res);
*/
/*
function fatorial(n){
    let fat = 1 
    for (let c = n;c>1;c--){
        fat *= c

    }
    return fat
}

console.log(fatorial(5));
*/
function fatorial(n){
    if (n == 1) {
        return 1
    }else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5));
