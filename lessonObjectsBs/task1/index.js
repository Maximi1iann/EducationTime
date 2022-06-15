

const prop = 'my';

const obj ={
    age: 17,
    interest: 'football',
    name: 'Tom',
    'my name': 'Bob',
    [prop + 'name']: 'value',
};

// console.log(obj.age); //17

// obj.age = 18;

// console.log(obj.age); //18

console.log(obj['my name']);

console.log(obj[prop + 'name']);