class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi = function() {
        console.log(`Hi, I am ${this.name}`);
    }

    requestNewPhoto = function() {
        console.log(`New photo ewquest was sent for ${this.name}`)
    }

    setAge = function(value) {
        if(value < 0) {
            return false;
        }
        this.age = value;
        if(value >= 25) {
            this.requestNewPhoto();
        }
        return value;
    }
}

const user1 = new User('Tom', 17);

console.log

// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// function User(anme, age) {
//     this.name = name;
//     this.age = age;
// }

// User.prototype.sayHi = function() {
//     console.log(`Hi, I am ${this.name}`);
// }

// User.prototype.requestNewPhoto = function() {
//     console.log(`New photo ewquest was sent for ${this.name}`)
// }

// User.prototype.setAge = function(value) {
//     if(value < 0) {
//         return false;
//     }
//     this.age = value;
//     if(value >= 25) {
//         this.requestNewPhoto();
//     }
//     return value;
// }