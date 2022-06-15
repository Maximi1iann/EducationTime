

const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName () {
        return `${firstName} ${lastName}`
    }
}

const setFullName = getFullName.bind(user)

console.log(setFullName())



