'use strict'

/* 
Make a program that shows all numbers between 2 numbers introduced by the user.
*/

var num1 = parseInt(prompt("Please, enter a number: ", 0));
var num2 = parseInt(prompt("Please, enter other number: ", 0));

document.write("<h5 class='mx-5'>De " + num1 + " a " + num2 + " estan estos numeros: </h5>")
var aux = 0;

document.write("<p class='mx-5 text-secondary'>")

if (num1 > num2){
    for(var i = num2; i <= num1; i++){
        if(i < num1){
            document.write(i + ", ")
        }else{
            document.write(i + ". ")
        }
    }
}else if(num2 > num1){
    for(var i = num1; i <= num2; i++){
        if(i < num2){
            document.write(i + ", ")
        }else{
            document.write(i + ". ")
        }
    }
}else{
    console.log("The numbers are same.")
}

document.write("</p>")