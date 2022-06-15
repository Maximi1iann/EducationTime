const squareArray = num => {
    if (!Array.isArray(num)){
        return null;
    }
    
    return num.map(number => number * 2);
};




const numbers = [1, 4, 6, 3, 7, 5, 2];
const number = 654;

console.log(squareArray(numbers))