// concatProps

const user = {
    name: 'Tom',
    key: 17,
};

const concatProps = obj => {
    let arr = [];

    for(let key in obj) {
        arr.push(obj[key]);
        // arr= arr.cocat(obj(key));
    }

    return arr;
};

console.log(concatProps(user));