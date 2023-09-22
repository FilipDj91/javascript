
function longword() {
    let words = {
        'quickest', 
        'brown', 
        'fox', 
        'jumps',
        'over', 'the', 'lazy', 'dog'

};

    let longestWord = " ";
for (i = 0, i < words.length; i++) {
if (words[i].lenght > longestWord.length) {
longestWord = words[i]

}
}
return longestWord

}


