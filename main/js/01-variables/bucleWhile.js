'use strict'


var year = 2018;

while(year <= 2051){
    console.log("Estamos en el año: " + year);
    year++;
}


var yearAlter = 1992;
var launch = 2020;
var texto = " años para que Cyberpunk 2077 salga al mercado."
var i = 0;

while(launch > yearAlter){
    console.log("En " + (yearAlter + i) + " faltaban " + (launch-yearAlter) + texto);
    i++;
    launch--;
}