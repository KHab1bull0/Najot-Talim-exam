

async function getDate() {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/100')
    const json = await res.json()

    const countObj = {}
    json.forEach(obj => {
        if (countObj[obj.author]) {
            countObj[obj.author] += 1
        } else {
            countObj[obj.author] = 1
        }
    });
    let max = Math.max(...Object.values(countObj))
    let ansArr = []

    for(key in countObj){
        if(countObj[key] == max){
            ansArr.push(key)
        }
    }
    return ansArr
}

getDate().then(data => {
    console.log(data)
}).catch(error => {
    console.log(error.name)
    console.log(error.message)
})