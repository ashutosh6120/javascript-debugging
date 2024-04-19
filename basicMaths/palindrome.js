//palindrome number

function palindrome(num) {
    let checkNum = num;
    let temp=0;
    while(num != 0) {
        const rem = num % 10;
        temp = temp * 10 + rem;
        num = Math.floor(num / 10);
    }
    if(checkNum === temp)
        return 'palindrome';
    else
        return 'not palindrome';
}

console.log(palindrome(121));