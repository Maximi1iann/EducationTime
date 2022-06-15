// getAdults


// Object.key();
// Object.values();
// Object.entries();

// console.log(Object.key(user))


users = {
    'Tom': 17,
    'John Doe': 19,
    'Bob': 18,
};

// const getAdults = usersObj => {
//     const usersArray = Object.entries(usersObj);
//     const filteredUserArray = usersArray
//         .filter(user => user[1] >= 18);
    
//     const usersNames = filteredUserArray
//         .map(user => user[0]);

//     return usersNames;
// };


const getAdults = usersObj =>  Object.entries(usersObj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);


console.log(getAdults(users));