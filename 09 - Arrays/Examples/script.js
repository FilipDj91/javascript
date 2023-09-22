var words = ['hello', 'world', 'welcome'];
var array2 = new Array('eat', 'sleep');
var mylist = [];

var numberArray = [2, 4, 6, 8];

var newData = ['work', 'exercise', 1, true, {}];

var myArray = ['h', 'e', 'l', 'l', 'o'];

console.log(myArray[0]);
console.log(myArray[1]);

var dailyActivities = ['eat', 'sleep'];
dailyActivities.push('exercise');
console.log(dailyActivities);

dailyActivities.unshift('work');
dailyActivities.pop();
console.log(dailyActivities);

console.log(dailyActivities.length);
var myFancyNewArray = [];

for (var i = 0; i < dailyActivities.length; i++) {
    myFancyNewArray.push(dailyActivities[i])
}

console.log(myFancyNewArray);