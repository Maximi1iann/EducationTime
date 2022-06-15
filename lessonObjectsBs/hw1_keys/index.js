'use strict';

/**
 * @param {object} obj
 * @return {undefined}
 */

const getKeys = obj => Object.keys(obj)

// examples
// getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' });
// prints ===>
// name
// city
// englishLevel

console.log(getKeys({ name: 'Denis', city: 'Warsaw', englishLevel: 'A1' }));
