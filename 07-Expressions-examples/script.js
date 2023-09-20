var age = 26;

if (age >= 18 && age <= Infinity) {
  console.log("User is of legal drinking age.");
} else {
  console.log("User is NOT of legal drinking age. DO NOT SERVER HIM");
}

const fruit = "Oranges";

switch (fruit) {
  case "Oranges":
    console.log("User has bought oranges");
    break;

  case "Mangoes":
    console.log("User has bought mangoes.");
    break;
  case "Papayas":
    console.log("User has bought papayas.");
    break;
  default:
    console.log("I have no idea what an user has bought.");
    break;
}

//
var date = new Date().getDay();
console.log(date);

switch (date) {
  case 0:
    console.log("Today is Sunday.");
    break;

  case 1:
    console.log("Today is Monday. Ugh");
    break;
  case 2:
    console.log("Today is Tuesday.");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;

  case 4:
    console.log("Today is Thursday.");
    break;

  case 5:
    console.log("Today is Friday.");
    break;

  case 6:
    console.log("Today is Saturday.");
    break;
}

var count = 0;
do {
  console.log(count);
  count++;
} while (count < 10);

for (var i = 1; i < 10; i++) {
  console.log("Current counter is " + i);
}

var numberOfGreetings = 35;
var welcomeMessage = "Hello, Filip.";

for (let i = 0; i < numberOfGreetings; i++) {
  console.log(welcomeMessage);
}
