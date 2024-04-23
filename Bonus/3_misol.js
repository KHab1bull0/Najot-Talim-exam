

function identityMatrix(num){
    let mainArr = []

    if(num <= 0){return []}

    for(let i = 0; i < num; i++){
        let arr = []
        for(let j = 0; j < num; j++){
            if(i == j){
                arr.push(1)
            } else {
                arr.push(0)
            }
        }
        mainArr.push(arr)
    }
    return mainArr
}

console.log(identityMatrix(1)); 

console.log(identityMatrix(2)); 

console.log(identityMatrix(5)); 