"use strict";




// function showMultiplicationTable(x){
//     console.log(x + " x " + 1 + " = " + x * 1)
//     console.log(x + " x " + 2 + " = " +  x * 2)
//     console.log(x + " x " + 3 + " = " +  x * 3)
//     console.log(x + " x " + 4 + " = " +  x * 4)
//     console.log(x + " x " + 5 + " = " +  x * 5)
//     console.log(x + " x " + 6 + " = " +  x * 6)
//     console.log(x + " x " + 7 + " = " +  x * 7)
//     console.log(x + " x " + 8 + " = " +  x * 8)
//     console.log(x + " x " + 9 + " = " +  x * 9)
//     console.log(x + " x " + 10 + " = " +  x * 10)
// }
// showMultiplicationTable(0)
//
//
//
//
for (var y = 0; y < 10; y++) {
    var count = 0
    for (var x = 0; x < Math.floor(Math.random()*(200-20)+20); x++){
        count++
    }
    if(x % 2 === 0){
        console.log(count + " " + "is an even number.")
    }else
        console.log(count + " " + "is an odd number.")

}












