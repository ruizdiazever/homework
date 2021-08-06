/* 
Show all dividers numbers of a number introduced by prompt. (EN)
Mostra tutti i numeri dei divisori di un numero introdotto da prompt. (IT)
*/

'use strict'

var num = parseInt(prompt("Please, enter a number: ", 0));

document.write("<h5 class='mx-5'>The numbers divisors of " + num + " are: </h5>")
document.write("<p class='mx-5'>")


for(var i = 0; i <= num; i++){
    if((num % i) == 0){
        if(i == num){
            document.write(i, ".")
        }else{
            document.write(i, ", ")
        }
    }
}

document.write("</p>")
