'use strict'

// MULTIDIMENSIONAL ARRAY
var categorys = ["Action", "Terror", "Comedy", "Sci-Fi"];
var movies = ["Matrix", "Ghost in the Shell", "Stalker", "Interestellar"];

var cine = [categorys, movies];
console.log(cine);



// Access to element 'Sci-Fi' in array 'categorys'.
console.log(cine[0][3]);
// Access to element 'Ghost in the Shell' in array 'movies'.
console.log(cine[1][1]);



// Add element in array
movies.push("Batman");


// Exercise
var userMovie = "";

do{
    userMovie = prompt("Introduce tu pelicula: ");
    movies.push(userMovie);
}while(userMovie != "STOP");

movies.pop();           // Delete element in array "STOP". 
//movies.pop();           // Delete a element more.
console.log(movies);


// DELETE ELEMENT !IMPORTANT
var indice = movies.indexOf("Gran torino");

// El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
if (indice > -1){
    movies.splice(indice, 1); // (elementoAeliminar, cantidad)
}

console.log(movies);



// JOIN, une un array separados por comas..
var movieString = movies.join();
console.log(movieString);
