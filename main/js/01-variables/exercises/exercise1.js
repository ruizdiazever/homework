'use strict'

/* 
Program that asks for 2 numbers and tells us which is the biggest, 
the smallest or if they are the same.

PLUS: The values must be non-zero and numeric, otherwise warn the user.
*/

var num1 = parseInt(prompt("1. Please input a number: ", 0));
var num2 = parseInt(prompt("2. Plase input other number.", 0));

if(num1 && num2 != NaN){
    if (num1 != num2){
        if (num1 > num2){
            alert("The number biggest is " + num1 + "\n" +
                  "The number smallest is " + num2)
        }else{
            alert("The number biggest is " + num2 + "\n" +
                  "The number smallest is " + num1)
        }
    }else{
        alert("The numbers "  + num1 + " and " + num2 + " are the same.")    
    }
}else{
    alert("Please input a correct value.")
}


