
function odamSoni(arr){
    let count = 0
    arr.forEach(elem => {
        count += elem[0]
        count -= elem[1] 
    });
    return count
}

console.log(odamSoni([
    [10, 0],
    [3, 5],
    [5, 8]
]))

console.log(odamSoni([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8]
])); 