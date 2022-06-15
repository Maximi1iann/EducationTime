/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = (num) => new Promise(resolve => {
    // put you code here
    resolve(num)
  });
  
  /*
   * пример использования
   */
  makePromise(17).then(number => {
    console.log(number); // 17
  });
  