// Prikupljanje viška argumenata u funkciji
function zbrajanje(...brojevi) {
  let rezultat = 0;
  for (let broj of brojevi) {
    rezultat = rezultat + broj;
  }
  return rezultat;
}

console.log(zbrajanje(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Prikupljanje preostalih elemenata u nizu
const [prvi, drugi, ...ostali] = [1, 2, 3, 4, 5];
console.log(prvi);
console.log(drugi);
console.log(...ostali);

// Destrukturiranje objekta
const person = {
  name: "John",
  age: 30,
  country: "USA",
};

const { name, ...rest } = person;
console.log(name);
console.log(rest);
