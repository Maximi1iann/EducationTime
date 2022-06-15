const user = {
    name: 'Tom',
    key: 17,
};

const { name = 'default', ...resProps } = user;


const player = {
    game: 'football',
    ...resProps,
};


console.log(player);