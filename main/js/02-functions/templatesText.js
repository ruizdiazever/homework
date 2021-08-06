'use strict'

// Plantillas de texto

var nombre = prompt("Enter your name: ");
var apellido = prompt("Enter your last name: ");

// var text = "My name is " + nombre + " " + apellido;
var text = `
    <div class="m-5">
        <h1>Welcome</h1>
        <h3>Su nombre es: ${nombre}</h3>
        <h3>Su apellido es: ${apellido}</h3>
    </div>
`;


document.write(text);