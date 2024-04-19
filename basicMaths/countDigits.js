// count no of digits in number


function countdigits(num) {
    let count = 0;
    while (num != 0) {
        num = Math.floor(num / 10);
        ++count;
    }
    return count;
}

console.log('no of digits in given number is: ', + countdigits(48769));
