function toCamelCase(str) {
    debugger
    let arrayedString = str.split('');
    let newArray = []
    for (let i = 0; i < arrayedString.length; i++) {
        if (arrayedString[i] === "-" || arrayedString[i] === '_') {
            continue
        } else if (arrayedString[i - 1] === '-' || arrayedString[i - 1] === '_') {
            newArray.push(arrayedString[i].toUpperCase())
        } else {
            newArray.push(arrayedString[i]);
        }
    } return newArray.join('')
}

toCamelCase('this-is-a-test')