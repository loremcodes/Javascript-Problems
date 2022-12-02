/*
 Find factorial of given number
input -> 5
output -> 120
*/

factorial = (input) => {
    let fact = 1;

    if (input === 1 || input === 0){
        return 1;
    }

    for (let index = 2; index <= input; index++) {
        fact = fact * index
    }

    return fact;
}

let result = factorial(5)
console.log(result)