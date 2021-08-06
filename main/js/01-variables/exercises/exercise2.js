'use strict'

/* 
Using a loop, show the sum, the average of the input numbers to
enter a negative number and there show the result.
*/

/* 

// Program by the teacher

var counter = 0;
var adittion = 0;

 do{
    var num = parseInt(prompt("Please input a number: ", 0));

    if(isNaN(num)){
        num = 0;
    }else if(num >= 0){
        adittion = adittion + num;
        counter++;
    }
    
    console.log(adittion);
    console.log(counter);

}while(num >= 0) */


// My program
var counter = 0;
var addition = 0;

while(true){
    var num = parseInt(prompt("Please input a number: ", 0));

    if(num > 0){
        addition = addition + num;
        counter++;

        console.log("The sum of the numbers are: " + addition)
        console.log("The average of the numbers are: " + (addition / counter) + "\n" + "----------------------------------------")
    }else{
        alert("The program has been completed. Thanks! Vuelva prontos!")
        break;
    }
}
