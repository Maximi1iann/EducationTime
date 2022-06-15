// TranformToObject

const transformToObject = arr => {
    let obj = {};

    arr.forEach(el => {
        obj[el] = el;
    });

    return obj;
};
// [1, 'text'] => { '1' : 1, text: 'text'};
const arr = [1, 'text'];
const result = transformToObject(arr);

console.log(result);

// const user = {
//     name: 'Tom',
// };

// user.name = 'Bob';

// console.log(user.name);