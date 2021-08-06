'use strict'

var num = 444;
var text1 = "Welcome to The Matrix, this world is amazing Neo";
var text0 = "   Welcome to The Matrix, this world is amazing Neo    ";
var text2 = "and there is not reasons for go outside this."

// replace
// The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.
var text3 = text1.replace("Matrix", "Earth");
console.log(text3);

// slice
// The slice() method returns the selected elements in an array, as a new array object.
var text4 = text1.slice(23);
var text5 = text1.slice(24, 44); // desde, hasta
console.log(text4, "\n", text5);

// split
// The split() method is used to split a string into an array of substrings, and returns the new array.
var text6 = text1.split(" ");
console.log(text6);

// trim
//The trim() method removes whitespace from both sides of a string.
var text7 = text0.trim();
console.log(text7);
