'use strict'

function helloWorld(text){
    var world = "Text within functions."    // Local scope

    console.log(text);                      
    console.log(num.toString());
    console.log(world);
}

var something = "Hello, I'm a variable of global scope."; // Global scope
var num = 12; // Global scope

helloWorld(something);
/* helloWorld(world); // ERROR */