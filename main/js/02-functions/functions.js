// A functions is a reusable grouping of a set of intructions. (EN)
'use strict'



// Function with a 'return'
function calculator(){
    return "Hi, I am a calculator.";
}
console.log(calculator()) // Invocation



// Function with a 'console.log' inside
function calculatorAlter(){
    console.log("Hi, I am a calculator, too.")

    return "So, do you need something?"
}
calculatorAlter() // Invocation
