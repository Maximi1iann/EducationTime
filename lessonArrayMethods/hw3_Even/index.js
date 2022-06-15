const increaseEvenEl = (arr, delta) => {
    if(!Array.isArray(arr)){
        return null;
    };

    let arr2 = arr.map(number => {
        if(number % 2 === 0) {
            return number + delta;
        } else {
            return number
        };
    });

    return arr2;
};


const numbers = [2, 5, 6, 8, 11, 9, 4];

console.log(increaseEvenEl(numbers, 20));

console.log(numbers);