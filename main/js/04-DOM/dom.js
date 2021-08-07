// DOM - Document Object Model
'use strict'

function cambiaColor(color){
    caja.style.background = color;
    caja.style.color = "white";
}

/* getElementById */
var caja = document.getElementById("micaja")
console.log(caja.innerHTML)
caja.innerHTML = 'Soy mas que una caja!';
caja.style.color = "grey";
caja.style.paddingTop = "15px"
caja.className = "hola"

/* querySelector */
var caja2 = document.querySelector("#micaja2")
caja2.innerHTML = 'Soy mas que una caja!';
caja2.style.color = "grey";
caja2.style.paddingTop = "15px"
caja2.className = "hola"
