//unsorted array => sorted array

const sortArray = numbers => 
    numbers.slice().sort((a, b) => a - b);

const arr = [10, 5, 3, 4, 6, 8, 2, 12, 9];

console.log(sortArray(arr));

console.log(arr);
















// filter array

// const getSpecialNumbers = numbers => 
//     numbers.filter(num => num % 3 === 0);

// const arr = [1, 2, 3, 4, 5, 6];

// console.log(getSpecialNumbers(arr));