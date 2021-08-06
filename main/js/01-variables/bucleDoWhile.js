'use strict'

var years = 30;
var num = 1;

// Siempre ejecuta al menos una vez y despues sigue si la condicion se cumple.
do{
    alert(num +"- Only when it is greater than 25.");
    num++;
    years--;
}while(years > 25)