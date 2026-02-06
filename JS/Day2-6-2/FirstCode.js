console.log("This is the main thread.");

console.log("Creating a worker thread...");


let a = 12;
let b = 5;

let ac = a + b;

console.log("The sum of a and b is:", ac);

let ar1 = [1, 2, 3, 4, 5];
let ar2 = [6, 7, 8, 9, 10];

let ar3= ar1.concat(ar2);

console.log("The concatenated array is:", ar3);

letar3S1= ar2.push(...ar1);

console.log("The concatenated array using push is:", ar2);

let A3S4= [...ar1,...ar2];

console.log("The concatenated array using spread operator is:", A3S4);

let A3spop = A3S4.pop(5);

// what is pop() method in JavaScript?
// The pop() method in JavaScript is used to remove the last element from an array and return that element. It modifies the original array by reducing its length by one. If the array is empty, it returns undefined.
console.log("The popped element is:", A3spop);
console.log("The array after popping is:", A3S4);

// top operators in JavaScript
// Arithmetic Operators: +, -, *, /, %, ++, --
// Assignment Operators: =, +=, -=, *=, /=, %=
// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Predefine inbuilt 20 most used functions in JavaScript
// console.log()
// setTimeout() 
// setInterval()
// parseInt()
// parseFloat()     
// isNaN()
// JSON.stringify()
// JSON.parse()
// alert()
// prompt()



// how use setTimeout() function in JavaScript?
// The setTimeout() function in JavaScript is used to execute a specified function or code snippet after a certain delay (in milliseconds). It takes two parameters: the first is the function to be executed, and the second is the delay time in milliseconds. For example:      

setTimeout(() => {
  console.log("This message will be displayed after 2 seconds.");
}, 2000);

// This code will log the message to the console after a delay of 2 seconds (2000 milliseconds). You can also pass additional arguments to the function being executed by setTimeout() if needed.

setTimeout(()=>{
    console.log("This message will be displayed after 3 seconds.");
},300);


// how types of functions in JavaScript?                   
// 1. Function Declarations: These are defined using the function keyword and can be called before they are defined due to hoisting.

function greet() {
  console.log("Hello, World!");
}   
greet(); // Output: Hello, World!

// 2. Function Expressions: These are defined as part of an expression and are not hoisted, meaning they cannot be called before they are defined.
const greetExpression = function() {
  console.log("Hello, World!");
};
greetExpression(); // Output: Hello, World! 
// 3. Arrow Functions: These are a more concise syntax for writing function expressions and do not have their own this context.
const greetArrow = () => {
  console.log("Hello, World!");
};  
greetArrow(); // Output: Hello, World!  

const simplefun = ()=>{(
    console.log("This is a simple arrow function.")
)}
simplefun();
// 4. Anonymous Functions: These are functions that do not have a name and are often used as arguments to other functions or assigned to variables.
setTimeout(function() {
  console.log("This is an anonymous function.");
}, 1000);   
// 5. Immediately Invoked Function Expressions (IIFE): These are functions that are defined and executed immediately after their creation.
(function() {
  console.log("This is an IIFE.");
})();



setTimeout(function() {
    console.log("This is another anonymous function.");
})