let word;
function capitalize(word) {
    // The .at() method allows you to read a character at an index (which can also be negative).
    // console.log(word.at(2))
    let firstLetter = word[0].toUpperCase();
    let restOfWord = word.slice(1).toLowerCase();
    return firstLetter + restOfWord;
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"
