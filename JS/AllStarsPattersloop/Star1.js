console.assert("This is a message from the main thread.");

// what is men od assert in js
// The `console.assert()` method in JavaScript is used to write an error message to the console if a specified condition is false. It takes two arguments: the first is the condition to test, and the second is the message to display if the condition is false. If the condition evaluates to true, nothing happens. If it evaluates to false, the message is logged as an error in the console. This method is often used for debugging purposes to ensure that certain conditions hold true during code execution.

// example 
// let x = 5;
// console.assert(x > 10, "x should be greater than 10"); // This will log an error message because the condition is false


// Stars patters

// print the following pattern using loops
// *
// **
// ***
// ****
// *****


// var a =8;
// for (let i=0;i<=a;i++){
//     let stars = "";
//     for(let j=0;j<=i;j++){
//         stars += "*";
//     }

//     console.log(stars);
// }

// print the following pattern using loops
// *****
// ****
// ***
// **
// *
// please not give me now suggestions for this patterns
var a =8;
for (let i=0;i<=a;i++){
    let starts = "";

    for(let j=0;j<=a-i;j++){
        starts += "*";
    }
    console.log(starts);
}

for (let i=a;i<=0;i--){
    let starts = "";
    for(let j=0;j<=a-i;j++){
        starts += "*";
    }   
    console.log(starts);
}



// what is the measn o repear t in js
// The `repeat()` method in JavaScript is a string method that constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together. It takes one argument, which is the number of times to repeat the string. If the argument is a negative number or if it is not a finite number, a RangeError will be thrown. If the argument is zero, an empty string will be returned.

// example
// let str = "Hello ";
// console.log(str.repeat(3)); // Output: "Hello Hello Hello "

// stars pattern using repeat method
// print the following pattern using loops
// *    
// **  
// ***
// ****
// *****

var a =8;
for (let i=0;i<=a;i++){
    let stars = "*".repeat(i);
    console.log(stars);
}