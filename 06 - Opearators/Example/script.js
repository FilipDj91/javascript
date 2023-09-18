var a = 6;
var b = '5';

console.log(typeof (a)); // number

// ARITHMETIC
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a / 0);
console.log(a / Infinity);
console.log(a % 6)

// COMPARISON
console.log(a == b);
console.log(a === b);
console.log('' == 0);

// LOGICAL
console.log((5 < 6) && (6 == 6));
console.log((5 < 6) || (6 == 6));
console.log(!(5 < 6));

// CONDITIONAL (TERNARY)
console.log(1 == 1 ? 'This is EQUAL' : 'This is NOT EQUAL');
console.log(1 === '1' ? 'This is EQUAL' : 'This is NOT EQUAL');