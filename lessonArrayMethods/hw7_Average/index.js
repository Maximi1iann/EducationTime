const arrAverage = arr => {
    if(!Array.isArray) {
        return null;
    };
    
    return arr.reduce((a, b) => a + b) / arr.length;
}

const number = [2, 5, 6, 3];

console.log(arrAverage(number));