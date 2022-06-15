const getRandomNumber = (from, to) =>
    from + Math.random() * (to - from);

const request = url => new Promise(resolve => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
        resolve({
            userData:{
                name: 'Tom',
                age: 17,
            },
            source: url
        });
    }, randomDelay)
});

const servers = [
    'https://server.com/us',
    'https://server.com/eu',
    'https://server.com/au',
];

const getUserASAP = userId => {
    const userUtls = servers
        .map(serverUrl => `${serverUrl}/users/${userId}`);

    const requests = userUtls
        .map(userUtl => request(userUtl));
    
    return Promise.race(requests);
};

getUserASAP('user-id-1')
    .then(res => console.log(res))