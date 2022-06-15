//copyObj

const users = {
    'Tom': 17,
    'Bob': 100,
};

const players = {
    'John Doe': 19,
    'Bob': 18,
}

const res = Object.assign(users, players);

console.log(res);