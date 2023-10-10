//

var str = "Johnny is master is his field.";

var output = str.split('').reverse().join('')
console.log(output)

//

var sentence = "he is awesome";

var captializedString = (str) => str[0].toUpperCase();

var words = sentence.split(' ').map(captializedString);
var capitalizedSentence = words.join(' ');
console.log(capitalizedSentence); 
