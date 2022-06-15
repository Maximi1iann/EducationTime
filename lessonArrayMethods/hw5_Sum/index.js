const sum = arr => {
    if(!Array.isArray) {
        return null
    };

    return arr.reduce((a, b) => a + b);
}

const number = [2, 5, 6, 3, 0, 3, -1];

console.log(sum(number));