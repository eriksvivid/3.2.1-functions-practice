/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(number1, number2){
    "use strict";
    return Math.max(number1, number2);
}

console.assert( max(5, 10) == 10 );


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(number1, number2, number3){
    "use strict";
    return max(max(number1, number2, number3));
}

console.assert(maxOfThree(5, 10, 20) === 20);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    if(char.length != 1){
      return false;
    }
    return 'aeiouAEIOU'.indexOf(char) == -1 ? false: true;
}

console.assert( isVowel('a') );

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    //...
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(value){
    "use strict";
    return value.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    });
}
console.assert(sum([1, 2, 3]) == 10);

function multiply(value){
    "use strict";
    return value.reduce(function(previousValue, currentValue) {
      return previousValue * currentValue;
    });
}
console.assert(multiply([1, 2, 3]) == 6);

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse("string"){
    "use strict";
    for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}
console.assert(reverse("string") == "gnirts");

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    return words.filter(finction(value){
      return value.length > 3;
    });
}
console.assert( filterLongWords(['one', 'two', 'four', 'five'], 3) == ['four', 'five']);

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
