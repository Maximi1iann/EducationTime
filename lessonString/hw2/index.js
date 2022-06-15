function countOccurrences(str, str1) {
    if (str1 === '') {
        return null
    }

    return (str.split(str1).length - 1);
}

const action = countOccurrences('somethig in the text', '');

console.log(action);