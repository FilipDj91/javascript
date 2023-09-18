var greet = 'Hello, my name is ';
var firstName = 'Nino';

var user = greet + firstName; // 'Hello, my name is ' + 'Nino';
console.log(user);

console.log('I have 26 ' + 'years');
console.log('I have' + ' ' + '\'3\' dogs');

console.log('Lorem ipsum dolor sit \namet consectetur adipiscing elit.');

// length
var str = 'Life, the universe and everything.';
console.log(str.length);

// charAt
var sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.charAt(4)); // Starts from 0

// trim
var greeting = '     Hello World!                   ';
console.log(greeting.trim());

var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
 
var searchTerm = 'dog';
var indexOfFirst = paragraph.indexOf(searchTerm);

console.log('Search term found at ' + indexOfFirst);

var secondTerm = paragraph.indexOf(searchTerm, (indexOfFirst + 1));

console.log('2nd search term found at ' + secondTerm);

// toUpperCase, toLowerCase
var sentence2 = 'The quick brown FOX jumps over the lazy DOG.';
console.log(sentence2.toUpperCase());
console.log(sentence2.toLowerCase());