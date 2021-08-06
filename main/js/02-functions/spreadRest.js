'use strict'

// REST and SPRAD parameters.



// Function with 2 parameters.
function listFruits(fruit1, fruit2){
    console.log("Fruit 1: ", fruit1);
    console.log("Fruit 2: ", fruit2);
    console.log("*****************");
}

listFruits("Apple", "Orange")
listFruits("Banana", "Melon", "Apple", "Avocado"); // Show onlu 'Banana' and 'Melon'



// REST
function listFruitsRest(fruit1, fruit2, ...fruits){
    console.log("Fruit 1: ", fruit1);
    console.log("Fruit 2: ", fruit2);
    console.log(fruits); // Here
    console.log("*****************");                          
}

listFruitsRest("Banana", "Melon", "Apple", "Avocado"); // Show all fruits



// SPREAD
var fruits = ["Naranja", "Manzana"];
listFruitsRest(...fruits, "Sandia", "Pera", "Coco", "Melon");