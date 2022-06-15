const delay = num => new Promise (resovle => {
    setTimeout(() => {
        resovle('done')
    }, num)
})

delay(3000)
    .then((el) => console.log(el));