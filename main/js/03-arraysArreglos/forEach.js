'use strict'

var technologies = ["Python", "Rush", "Linux", "Fedora", "Tesla", "Xiaomi"];

// FORMA COMPLETA
technologies.forEach((elemento, index, data) => {
    document.write("<li class='mx-5'>"+ elemento + " (" + index +")</li>");
    console.log(data);
});

document.write("<hr>")

// FORMA MAS SENCILLA
technologies.forEach((elemento) => {
    document.write("<li class='mx-5'>"+elemento+"</li>");
});
