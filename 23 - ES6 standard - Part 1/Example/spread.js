// Kopiranje niza
const original = [1, 2, 3];
const copy = [...original];

console.log(copy);

// Spajanje niza
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const concatenated = [...array1, ...array2];
console.log(concatenated);

// Kopiranje objekta
const originalObject = { ime: "Nino", prezime: "Škuflić" };
const copyObject = { ...originalObject };
console.log(copyObject);

// Spajanje objekta
const objekt1 = { a: 1, b: 2 };
const objekt2 = { b: 3, c: 4 };
const spojeniObjekt = { ...objekt1, ...objekt2 };

console.log(spojeniObjekt); // Ispisuje { a: 1, b: 3, c: 4 }

// Slanje argumenta funkcijama
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result);
