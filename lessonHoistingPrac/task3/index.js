//pseudo arrays

function argsSum() {
    return [...arguments].reduce((acc, elem) => {
        return acc + elem;
    }, 0);
}

console.log(argsSum(1, 2, 3, 4))
