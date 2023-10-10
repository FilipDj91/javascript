// Uvoz funkcija iz drugog modula
const math = require("./script");

// Korištenje uvezenih funkcija
const result1 = math.add(5, 3); // Output: 8
console.log(result1);

const result2 = math.subtract(10, 4); // Output: 6
console.log(result2);
