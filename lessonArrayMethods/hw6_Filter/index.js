const filterNames = (arr, text) => {
    const filterArray = arr.filter(el => el.length > 5 && el.includes(text))
        // if(el.length > 5 && el.includes(text)) {
        //     return arr;
        // }
    

    return filterArray;
}

const names = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];

console.log(filterNames(names,  'ya'));