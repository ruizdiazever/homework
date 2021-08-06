'use strict'

var text = "Welcome to the Matrix Neo, do you want know the true?";

// indexOf or search
var search = text.indexOf("Neo");
var search2 = text.search("Neo");
console.log(search);
console.log(search2);

// lastIndexOf
var searchLast = text.lastIndexOf("the");
console.log(searchLast);

// match, devuelve una array
var searchList = text.match(/the/gi); // gi= global search    |    expresion regular '/the/'
console.log(searchList);

// substr
var searchSubstr = text.substr(15, 6); // A partir del caracter 15 devuelve los proximos 6 caracteres.
console.log(searchSubstr);

// charAt, returns the character of the position introduced.
var searchAt = text.charAt(15);
console.log(searchAt);

// startWith. returns true o false if start with the string introduced.
var searchStart = text.startsWith("Welcome"); // true
var searchStart2 = text.startsWith("Neo");    // false
console.log(searchStart, searchStart2)

// includes, returs false or true, is key sensitive
var searchIncludes = text.includes("want know");
console.log(searchIncludes);