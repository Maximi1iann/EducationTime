
const flatArray = arr => arr.flat();

// const flatArray = arr => arr
//     .reduce((acc, elem) => {
//         return acc.concat(elem);
//     }, []);

const initArray = [1, [2, 3, 4], 5, [6]];

console.log(flatArray([1, [2, 3, 4], 5, [6]]));