'use strict'

// Operadores
var num1 = 7;
var num2 = 12;

var sum = num1 + num2;
var subtract = num1 - num2; 
var divition = num1 / num2;
var multiplication = num1 * num2;
var module = num1 % num2;

alert("The result of the operation is:" 
+ "\nSum: " + sum
+ "\nSubtract: " + subtract
+ "\nDivition: " + divition
+ "\nMultiplication: " + multiplication
+ "\nModule: " + module);


// Data types
var numInt = 44;
var stringText = "Hi, 'Welcome to the Matrix'";
var trueFalse = true;

console.log(stringText)
console.log(trueFalse)


var numFalse = "33.4"
var num = 88

console.log(numFalse + 7) // Concatena porque numFalse es String
console.log(Number(numFalse) + 7) // Suma porque la variable fue convertida a numero
console.log(parseInt(numFalse) + 7) // Convierto a entero
console.log(String(num) + 88) // Convierto a String un entero

// typeof, devuelve el tipo de dato de una variable
console.log(typeof(num))
console.log(typeof(trueFalse))
console.log(typeof(stringText))