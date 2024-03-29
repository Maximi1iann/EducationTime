// defer(func, ms) => Function

function defer(func, ms) {
    return function() {
        setTimeout(func, ms);
    }
};

const sayHi = () => {
    console.log('Hi');
}

const deferredSayHi = defer(sayHi, 1000);

deferredSayHi();