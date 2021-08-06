/* 
Show the odd numbers between 2 numbers introduced by user. (EN)
Mostra i numeri dispari tra 2 numeri introdotti dall'utente. (IT)
*/

'use strict'

var num1 = parseInt(prompt("1. Please introduced a number: "));
var num2 = parseInt(prompt("2. Please, introduced other number: "));
var aux = 0;

document.write("<h5 class='mx-5'>The odd numbers between " + num1 + " and " + num2 + " are: </h5>")

document.write("<p class='mx-5'>")

if (num1 > num2){
    for(var i = num2; i <= num1; i++){
        if((i % 2) != 0){

            // This is a condition for add a point '.' at the end of the iteration. 
            if(i == num1 || i == (num1 - 1)){
                document.write(i, ".")
            }else{
                document.write(i, ", ")
            }
        }
    }
}else if (num1 < num2){
    for(var i = num1; i <= num2; i++){
        if((i % 2) != 0){

            // This is a condition for add a point '.' at the end of the iteration. 
            if(i == num2 || i == (num2 - 1)){
                document.write(i, ".")
            }else{
                document.write(i, ", ")
            }
        }
    }
}else{
    document.write("Invalid. Enter correct values.")
}

document.write("</p>")