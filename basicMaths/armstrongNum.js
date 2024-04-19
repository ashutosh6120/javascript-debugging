//armstrong num

function armstrongnum(num) {
    let originalNum = num;
    let tempVal = 0;
    while(num != 0) {
        const rem = num % 10;
        tempVal += rem * rem * rem
        num = Math.floor(num / 10);
    }
    if(originalNum === tempVal)
        return 'Yes it is armstrong number';
    else
        return 'Not an armstrong number';
    return tempVal
}

console.log(armstrongnum(153));