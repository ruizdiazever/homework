'use strict'

var matrix = ["Ever", "Neo", 2077, "Trinity", true];

// Length
console.log(matrix.length);

// Index
var elemento = prompt("Marque el index del elemento que desea: ", 0);

if(elemento >= matrix.length){
    var elemento = prompt("Fuera de rango, introduzca un index menor o igual a  " + matrix.length, 0);
}else{
    alert("The element name is " + matrix[elemento]);
}

// Bucle
var languages = ["Python", "Rust", "JavaScript"];
document.write("<hr><h1 class='mx-5'>Favorite programming languages of 2021</h1>");

document.write("<ol class='mx-5'>")
    for(var i= 0; i < languages.length; i++){
        document.write("<li>" + languages[i] + "</li>")
    }
document.write("</ol>")
