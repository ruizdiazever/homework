// A functions is a reusable grouping of a set of intructions. (EN)
'use strict'



function calculator(num1, num2){
    console.log("------------\n" + num1 + " and " + num2 + "\n------------");

    console.log("Sum: " + (num1 + num2));
    console.log("Subtract: " + (num1 - num2));
    console.log("Multiplication: " + (num1 * num2));
    console.log("Division: " + (num1 / num2));

    return "The result are in terminal pinche cabron."
}




// Instances
calculator(10, 5);
calculator(15, -15);
// Instance with a FOR
for (var i = 1; i <= 10; i ++){
    calculator(9, i);3
}