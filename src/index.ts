import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);
const result_sub = calc.subtract(5, 3);
console.log(`result_add = ${result_sub}`);
const result_hello = calc.print_hello();
console.log(`result_hello = ${result_hello}`);
