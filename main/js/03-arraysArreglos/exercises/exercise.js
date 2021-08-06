'use strict'

/* 
1. Pida 6 numeros por pantalla y los meta en un array.
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en consola.
3. Ordenarlo y mostrarlo.
4. Invertir su orden y mostrarlo.
5. Mostrar cuantos elementos tiene el array.
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice. 
*/

var listNumbers = [];

for (var i = 1; i < 7; i++){
    var num = parseInt(prompt(i + ". Please, enter a number: ", 0));
    listNumbers.push(num)
}

function mostrarArray(elementos, textoCustom = ""){
    document.write("<p class='mx-5 fs-4'>" + textoCustom + "<strong class='text-primary'>" + elementos + "</strong>" + "</p>") 
}

console.log("Resultado: [" + listNumbers + "]")
var resultado = "[" + listNumbers + "]"
var resultadoOrdenado = "[" + listNumbers.sort(function(a, b){return a-b}) + "]"
var resultadoOrdenadoInvertido = "[" + listNumbers.reverse(function(a, b){return a-b}) + "]"
var resultadoLargo = listNumbers.length
var inputUser = parseInt(prompt("Please, search a number: ", 0));
var searchElement = listNumbers.includes(inputUser);
var searchIndex = listNumbers.indexOf(inputUser);

mostrarArray(resultado, "Resultado: ")
mostrarArray(resultadoOrdenado, "Resultado ordenado: ")
mostrarArray(resultadoOrdenadoInvertido, "Resultado ordenado invertido: ")
mostrarArray(resultadoLargo, "Largo del array: ")
mostrarArray(inputUser, "Numero introducido: ")
mostrarArray(searchElement, "Elemento introducido encontrado: ")
mostrarArray(searchIndex, "Posicion: ")