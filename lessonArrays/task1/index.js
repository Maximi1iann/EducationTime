
// const numberOfElemants = numbers.length;

// console.log(numberOfElemants);

// console.log('Element #1: ' + numbers[1]);
// console.log('Element #0: ' + numbers[0]);
// console.log('Element last: ' + numbers[numbers.length -1]);

const numbers = [11, 22, 33, 55, 66];

function getArrayBound(arr) {
    if(!Array.isArray(arr)){
        return null;
    }
    return[arr.length, arr[0], arr[arr.length -1]];
}

const arrayBound = getArrayBound(numbers);

console.log(arrayBound);