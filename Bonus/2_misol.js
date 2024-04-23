

function doubleFactorial(num){
    let d = 1
    if (num == 1){
        return num
    }
    if(num <= 0){
        return 1
    }
    return num * doubleFactorial(num-2)
}

console.log(doubleFactorial(9));
console.log(doubleFactorial(7)); // ➞ 105 
console.log(doubleFactorial(5)); // ➞ 15 
console.log(doubleFactorial(3)); // ➞ 3 
console.log(doubleFactorial(1)); // ➞ 1 