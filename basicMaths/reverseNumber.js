//reverse a number

function reverse(num) {
    let res=0;
    while(num != 0 ){
        const rem = num % 10;
        res = res * 10 + rem;
        num = Math.floor(num / 10);
    }
    return res;
}

console.log('The reverse number is: ', + reverse(54321));