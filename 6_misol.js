

function factorize(number){
    if(number <= 0){
        return []
    }

    let arr = []
    for(let i = 0; i <= number; i++){
        if(number % i == 0){
            arr.push(i)
        }
    }

    return arr
}

console.log(factorize(12)); // ➞ [1, 2, 3, 4, 6, 12]
console.log(factorize(4)); // ➞ [1, 2, 4]
console.log(factorize(15)); // ➞ [1, 3, 5, 15]
console.log(factorize(17));