
function isAnagram(str1, str2){
    let cleanStr1 = ''
    for(let i = 0; i < str1.length; i++){
        let letter = str1[i].charCodeAt()
        if(letter >= 65 && letter <= 90 || letter >= 97 && letter <= 122){
            cleanStr1+=str1[i]
        }
    }

    let cleanStr2 = ''
    for(let i = 0; i < str2.length; i++){
        let letter = str2[i].charCodeAt()
        if(letter >= 65 && letter <= 90 || letter >= 97 && letter <= 122){
            cleanStr2+=str2[i]
        }
    }

    let str11 = cleanStr1.split('').sort().join('')
    let str22 = cleanStr2.split('').sort().join('')

    if(str11 == str22){
        return true
    }else{
        return false
    }
}

console.log(isAnagram("tuk", "kut")); // true
console.log(isAnagram("olma", "mola")); // true
console.log(isAnagram("Hello", "world")); // false
console.log(isAnagram("Dormitory", "Dirty room")); // true