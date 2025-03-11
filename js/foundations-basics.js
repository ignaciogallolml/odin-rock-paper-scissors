function add7 (num) {
    return num + 7
}

console.log(add7(3) + ' result add7')

function multiply (num1, num2) {
    return num1 * num2
}

console.log(multiply(4,5) + ' result multiply');

function capitalize (word) {
    const lowerCase = word.toLowerCase();
    const finalWord = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1)

    return finalWord
}

console.log(capitalize('CEDEÑO hola'));

function lastLetter (word) {
    return word.slice(-1)
}

console.log(lastLetter('abcd'))