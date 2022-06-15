const numbers = [11, 22, 33, 55, 66];

// let sumOfNumbers = 0;

// for(let i = 0; i < numbers.length; i++ ) {
//     console.log(numbers[i]);
//     sumOfNumbers += numbers[i];
// }

// console.log('Result: ' + sumOfNumbers);

function sum(numbers) {
    let sumOfNumbers = 0;

    for(let i = 0; i < numbers.length; i++ ) {
        console.log(numbers[i]);
        sumOfNumbers += numbers[i];
    }

    return sumOfNumbers;
}

const sumOfElement = sum(numbers);

console.log('Result: ' + sumOfElement);