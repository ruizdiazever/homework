'use strict'


function calculator(num1, num2, show = false){
    if(show == false){
        console.log("Sum: " + (num1 + num2));
        console.log("Subtract: " + (num1 - num2));
        console.log("Multiplication: " + (num1 * num2));
        console.log("Division: " + (num1 / num2));
        console.log("******************************")
    }else{
        document.write("<p class='mx-5'>")
        document.write("Sum: " + (num1 + num2) + "<br>");
        document.write("Subtract: " + (num1 - num2) + "<br>");
        document.write("Multiplication: " + (num1 * num2) + "<br>");
        document.write("Division: " + (num1 / num2) + "<br>");
        document.write("</p>")
    }
}

// Instances
calculator(9, 9);
calculator(9, 9, true);
calculator(15, 9, true);