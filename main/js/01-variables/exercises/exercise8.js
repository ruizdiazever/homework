/* 
Calculator:
    - Ask for 2 numbers in screen.
    - If the value is incorrect, ask again.
    - In the body of page, show in a alert, page and terminal the result of
        sum, subtract, multiplication and divition of the 2 numbers.
*/

'use strict'

while(isNaN(num1 && num2)){
    var num1 = parseInt(prompt("1. Please, enter the firts number for the operations: ", 1));
    var num2 = parseInt(prompt("2. Please, enter the other number for the operations: ", 1));
}

document.write("<h5 class='mx-5'>The result of the operations is:  </h5>");


var resultado =     num1 + " + " + num2 + " = " + (num1+num2) + "<br>" +
                    num1 + " - " + num2 + " = " + (num1-num2) + "<br>" +
                    num1 + " x " + num2 + " = " + (num1*num2) + "<br>" +
                    num1 + " / " + num2 + " = " + (num1/num2);

var resultadoCMD =  num1 + " + " + num2 + " = " + (num1+num2) + "\n" +
                    num1 + " - " + num2 + " = " + (num1-num2) + "\n" +
                    num1 + " x " + num2 + " = " + (num1*num2) + "\n" +
                    num1 + " / " + num2 + " = " + (num1/num2);

document.write("<p class='mx-5'>" + resultado);
document.write("</p>");
console.log(resultadoCMD);
alert(resultadoCMD);
