// filter проверка на буквы
// map for space and add $
// if for add dote and null after number



const cleanTransactionsList = elem => {
    const regExp = /[a-zA-Z]/g;
    // elem.filter(regExp)
    const filteredByLetters = elem.filter(el => {
        if(!regExp.test(el)){
            return el
        }
    });

    const removedSpaceFromArray = filteredByLetters.map(el => {
        if(typeof el != 'number' && el.includes(' ') ){
            return el.trim(' ')
        }else{
            return el
        }
    });

    // 2
    const transformNumbersToString = removedSpaceFromArray.map(el => String(el));

    //3
    const addZero = transformNumbersToString.map(el => {
        if (el.length <= 3) {
            debugger;
            return `${el}.00`;
          }
          return `${el}0` ;
    });



   //4
    const addElemToArr = addZero.map(el => '$'.concat(el)
    
    )

    return addElemToArr
};


const elem = ['  1432.9 ', '1.4', 17,' 1 dollar '];

console.log(cleanTransactionsList(elem));