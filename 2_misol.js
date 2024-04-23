

function reverseInput(any) {
    let type = typeof any

    if (type === 'string' || type === 'number') {
        if (type == 'string') {
            let inputArr = any.split(' ')
            return inputArr.reverse()
        } else {
            let input = any+''
            return +(input.split('').reverse().join(''))
        }
    } else {
        return `Notog'ri kirish ma'lumoti! Faqat matn yoki raqam kiriting.`
    }
}

console.log(reverseInput(null))