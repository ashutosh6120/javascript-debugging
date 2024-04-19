// gcd of two numbers

//brute force
function GCD(num1, num2){
    let minVal = Math.min(num1, num2);
    let res;
    for(let i = 0; i< minVal; i++) {
        if(num1 % i === 0 && num2 % i ===0) {
            res = i;
        }
    }
    return res;
}

console.log('Gcd of two numbers using brute force: ' + GCD(88,56));

// euclid's approach
function gcd(num1, num2){

    if(num1 == 0) {
        return num2;
    }
    if(num2 == 0) {
        return num1;
    }
    if(num1 == num2) {
        return num1;
    }
    if(num1 > num2) {
        return gcd(num1 - num2, num2);
    }
    return gcd(num1, num2 - num1);
}

console.log('Gcd of two numbers: ' + gcd(88,56));