/* eslint-disable prefer-object-spread */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function mergeObjectsV1(obj1, obj2) {
    const action = Object.assign({}, obj1, obj2)
    return action
}

function mergeObjectsV2(obj1, obj2) {
    const action = Object.assign({}, obj2, obj1);
    return action
}
  
function mergeObjectsV3(obj1, obj2) {
    let mergeAction = {
        ...obj1,
        ...obj2
    };
    return mergeAction;
}
  
function mergeObjectsV4(obj1, obj2) {
    let mergeAction = {
        ...obj2,
        ...obj1
    };
    return mergeAction;
}
  
  // examples
const obj1 = {
    name: 'Tom',
    age: 17,
};
  
const obj2 = {
    name: 'Bob',
    student: false,
};
  
// mergeObjectsV1(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV2(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
// mergeObjectsV3(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV4(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }

console.log(mergeObjectsV1(obj1, obj2));
console.log(mergeObjectsV2(obj1, obj2));
console.log(mergeObjectsV3(obj1, obj2));
console.log(mergeObjectsV4(obj1, obj2));