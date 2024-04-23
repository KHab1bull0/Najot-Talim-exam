

function calculateSum(arr) {
    let obj = {}
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            break
        }
        if (obj[arr[i]]) {
            obj[arr[i]] += 1
        } else {
            obj[arr[i]] = 1
        }
        sum += arr[i] ** obj[arr[i]]
    }

    return sum
}

console.log(calculateSum([1, 1, 1, 4, 4, 0, 1]))