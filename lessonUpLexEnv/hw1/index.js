export const createCalculator = (num) => {
    function add (memory) {
        num =  num + memory
        console.log(num);
    };

    function decrease (memory) {
        num =  num - memory
        console.log(num);
    };

    function reset () {
        num = 0;
        console.log(num = 0);

    };

    function getMemo () {
        return num
    };

    return {
        add,
        decrease,
        reset,
        getMemo
    };
};