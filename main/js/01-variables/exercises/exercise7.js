//  Multiplicator table of a number entered by screen.

'use strict'

var num = parseInt(prompt("Please, enter a number: ", 1));

document.write("<h5 class='mx-5'>Multiplication table of a number entered by screen.</h5>");

document.write("<b class='mx-5'> Multiplication table of " + num + "</b>");
document.write("<p class='mx-5'>")
for(var i = 1; i <= 10; i++){
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
document.write("</p>");


// Multiplication table between 2 to 10
document.write("<b class='mx-5'> Multiplication table between 2 to 10: </b>");
document.write("<p class='mx-5'>")

for(var i = 2; i <= 10; i++){
    document.write("<b>Table of " + i + "</b><br>")
    for(var x = 1; x <= 10; x++){
        document.write(i + " x " + x + " = " + (x*i) + "<br>")
    }
    document.write("<br>")
}

document.write("</p>");
