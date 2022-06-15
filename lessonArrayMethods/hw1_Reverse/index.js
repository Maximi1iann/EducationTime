

const reverseArray = num => {
    const copyReverse = [...num];
    copyReverse.reverse();

    return copyReverse; 
};




const arr = [1, 4, 6, 3, 7, 5, 2]

console.log(reverseArray(arr));