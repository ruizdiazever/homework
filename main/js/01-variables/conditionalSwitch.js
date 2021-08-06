'use strict'

var edad = 54;
var print = "";

switch(edad){
    case 18:
        print = "Acabas de cumplir la mayoria de edad."
    break;

    case 25:
        print = "Ya eres un adulto."
    break;

    case 40:
        print = "Crisis de los cuarenta is coming."
    break;

    case 75:
        print = "Estas grande, come bien y cuidate mucho."
    break;
    
    default:
        print = "Tu edad no esta dentro de los parametros."
    break;
}

console.log(print);