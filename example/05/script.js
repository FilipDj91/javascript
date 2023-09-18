var greet = 'Hello, my name is';
var firstName = 'Nino';

var user = greet + firstName;
console.log(user);

console.log('I have 26'+'years');
console.log('I have'+ '' + '\'3\' dogs');


console.log('Lorem ipsum dolor blab balb balabAF VALBAJBLF');

var str = 'Life, the universe and everything.'; 
console.log(str.length);

var sentence = 'The quick brow fox jumps over the lazy dog.';
console.log(sentence.charAt(6));

var greeting = '        Hello World!'
console.log(greeting.trim());

var paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

var searchTerm = 'dog';
var indexOfFirst = paragraph.indexOf(searchTerm);
console.log('Search term found at ' + indexOfFirst);

var secondTerm = paragraph.indexOf(searchTerm, (indexOfFirst + 1));
console.log('2nd search tem found at ' + secondTerm);

var sentence2 = 'The quick borwn Fox jump over the lazy dog,';
console.log(sentence2.toUpperCase());
console.log(sentence2.toLowerCase());