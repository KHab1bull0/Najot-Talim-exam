
function removeABC(str) {

    if (str.includes('a') || str.includes('b') || str.includes('c')) {
        let ans = ''

        for(let i = 0; i < str.length; i++){
            if(str[i] == 'a'){
                ans += ' '
            } else if(str[i] == 'b'){
                ans += ' '
            } else if(str[i] == 'c'){
                ans += ' '
            } else {
                ans += str[i]
            }
        }
        return ans
    } else {
        return null
    }
}

console.log(removeABC('banana'))
