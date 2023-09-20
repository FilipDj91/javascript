var firstName = "John";
var lastName = "Doe";

var fullName = firstName + "   " + lastName;
console.log(fullName);

//var x=z ---2?y:5
var x;
if (z === 2) {
  x = y;
} else {
  x = 5;
}

//3

var count = 0;

while (count < 20) {
  count++;
  if (count % 2 == 0) {
    console.log("Broj" + " " + count + " je paran.");
  } else {
    console.log("Broj" + " " + count + " je neparan.");
  }
}
