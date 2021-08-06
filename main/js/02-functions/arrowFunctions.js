'use strict'

// The arrow functions is a mode for write callbacks of simple mode.


function addMe(num1, num2, sumAndShow, sumFor2){
    var sum = num1 + num2;

    sumAndShow(sum);
    sumFor2(sum);

    return sum;
}


addMe(5, 5, data => {
    console.log("The sum is: ", data);
},
    data => {
        console.log("The sum for 2 is: ", (data*2));
    }    
);