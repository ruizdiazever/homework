'use strict'


function withConsole(num1, num2){
    console.log("Sum: " + (num1 + num2));
    console.log("Subtract: " + (num1 - num2));
    console.log("Multiplication: " + (num1 * num2));
    console.log("Division: " + (num1 / num2));
    console.log("******************************")
}


function withDisplay(num1, num2){
    document.write("<p class='mx-5'>")
    document.write("Sum: " + (num1 + num2) + "<br>");
    document.write("Subtract: " + (num1 - num2) + "<br>");
    document.write("Multiplication: " + (num1 * num2) + "<br>");
    document.write("Division: " + (num1 / num2) + "<br>");
    document.write("</p>")
}


function calculator(num1, num2, show = false){
    if(show == false){
        withConsole(num1, num2);
    }else{
        withDisplay(num1, num2);
    }

    return true;
}


// Instances
calculator(9, 9);
calculator(9, 9, true);
calculator(15, 9, true);