const person = {
    name: 'Vladilen',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'ua', 'eng', 'de']
};

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    }
}

const showPeson = {
    keysAndValues() {
        console.log(person)
    }
}


const bound = showPeson.keysAndValues.bind(person);
bound()
// logger.keys.call(person);