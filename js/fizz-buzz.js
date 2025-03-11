//Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 
// However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. 
// For numbers which are multiples of both three and five print FizzBuzz.

// for (let i = 0; i < 4; i++) {
//     console.log("hola" + i);
// }

function fizzBuzz (num) {
    for ( let i = 1; i < num; i++ ) {
        if ( i % 3 === 0 && i % 5 === 0 ) {
            console.log("Fizz Buzz")
        } else if ( i % 3 === 0 ) {
            console.log("Fizz")
        } else if ( i % 5 === 0 ) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

console.log(fizzBuzz(100));