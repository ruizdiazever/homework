/* 
Make a program  that tells if a numbers is odd or even. (EN)
1.  Windows prompt
2.  If the value is invalid, ask again the value.
*/

'use script'



var num = parseInt(prompt("Please, enter a number: ", 0));

while(isNaN(num)){
    var num = parseInt(prompt("Please, enter a number: "));
}

document.write("<h5 class='mx-5'>Program that tells if a numbers is odd or even.</h5>")

document.write("<p class='mx-5'>")

if((num % 2) == 0){
    document.write(num + " es un numero entero.")
} else{
    document.write(num + " no es un numero entero.")
}

document.write("</p>")

