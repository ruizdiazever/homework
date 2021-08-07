'use strict'

var allDivs = document.getElementsByTagName('div');

// Retonar un array con los divs
console.log(allDivs)

// Acceder al segundo y retorno el texto contenido
var contentInText = allDivs[2];
console.log(contentInText.textContent)

// Cambiamos contenido del segundo div
contentInText.innerHTML = 'En realidad soy un Dragon!'

// Creamos variables
var seccion = document.querySelector('#miseccion')
var hr = document.createElement('hr');

// Todos los divs
var valor;
for(valor in allDivs){
    if(typeof allDivs[valor].textContent == 'string'){
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(allDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hr);
