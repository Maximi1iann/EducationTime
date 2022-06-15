import { createCalculator } from './index.js';

let num = 0;
const calculator = createCalculator(num);
const calculatorNext = createCalculator(num);

calculator.getMemo(); // 0

calculator.add(3);

calculator.getMemo(); // 3

calculator.decrease(5);

calculatorNext.add(5);

calculatorNext.getMemo(); // 5

calculator.getMemo(); // -2

calculator.reset();

calculator.getMemo(); // 0