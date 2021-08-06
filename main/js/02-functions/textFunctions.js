'use strict'

// TEXT TRANFORMATION
var num = 444;
var text = "Welcome to the JS Course of Victor Robles.";
var text2 = "is a good course.";

    // Integer to String
var date = num.toString();
console.log(typeof(date));
    // Lower case to Upper case
var date2 = text.toUpperCase();
console.log(date2);
    // Upper case to Lower case
var date3 = date2.toLowerCase();
console.log(date3);


// LENGTH TEXT
var namePerson = "Ever";
console.log(namePerson.length);

// CONCATENATE TEXT
var textOne = "Ever";
var textTwo = "Toujours";

var textTotal = textOne.concat(" ", textTwo);
console.log(textTotal);