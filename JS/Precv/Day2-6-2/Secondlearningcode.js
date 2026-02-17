// learn loops


// how use arrays in JavaScript?
// An array in JavaScript is a data structure that can hold multiple values in a single variable. You can create an array using square brackets [] and separate the values with commas. Here's an example of how to create and use an array in JavaScript:


let fruits = ["apple", "banana", "orange", "grape"];        
console.log("This message will be displayed after 3 seconds.");

console.log("Fruits array:", fruits);

// You can access individual elements of the array using their index (starting from 0). For example, to access the first element (apple), you would use fruits[0].      
console.log("First fruit:", fruits[0]); // Output: apple

// You can also use various array methods to manipulate the array, such as push(), pop(), shift(), unshift(), and more. For example, to add a new fruit to the end of the array, you can use the push() method:


// Output: ["apple", "banana", "orange", "grape", "mango"] make object in array
fruits.push("mango");
console.log("Fruits array after push:", fruits);

// what is push pop?
// The push() method in JavaScript is used to add one or more elements to the end of an array and returns the new length of the array. It modifies the original array by appending the specified elements. For example:

let numbers = [1, 2, 3];
let newLength = numbers.push(4, 5); 
console.log("New length of the array after push:", newLength);
console.log("Numbers array after push:", numbers);

// The pop() method in JavaScript is used to remove the last element from an array and return that element. It modifies the original array by reducing its length by one. If the array is empty, it returns undefined. For example: 
let lastElement = numbers.pop();
console.log("Popped element:", lastElement); 
console.log("Numbers array after pop:", numbers);   

// how many types of methods in JavaScript?
// There are several types of methods in JavaScript, including:
// 1. Array Methods: Methods that operate on arrays, such as push(), pop(), shift(), unshift(), map(), filter(), reduce(), etc.
// 2. String Methods: Methods that operate on strings, such as charAt(), concat(), includes(), indexOf(), slice(), toUpperCase(), toLowerCase(), etc.
// 3. Object Methods: Methods that operate on objects, such as hasOwnProperty(), keys(), values(), entries(), assign(), etc.
// 4. Math Methods: Methods that perform mathematical operations, such as round(), floor(), ceil(), random(), max(), min(), etc.
// 5. Date Methods: Methods that operate on date objects, such as getDate(), getDay(), getFullYear(), setDate(), setMonth(), etc.
// 6. Function Methods: Methods that operate on functions, such as call(), apply(), bind(), etc.
// 7. DOM Methods: Methods that interact with the Document Object Model (DOM), such as getElementById(), querySelector(), createElement(), appendChild(), etc.
// 8. Event Methods: Methods that handle events, such as addEventListener(), removeEventListener(), preventDefault(), stopPropagation(), etc.
// These are just a few examples of the types of methods available in JavaScript. There are many more methods and libraries that provide additional functionality.  
// how use web workers in JavaScript?
// Web Workers in JavaScript allow you to run scripts in the background, separate from the main execution thread of a web application. This helps to improve performance and responsiveness by offloading heavy computations or tasks to a separate thread. Here's a basic example of how to use Web Workers:
// main.js
// Create a new Web Worker  


// learns loops in JavaScript
for (let i = 1; i <= 5; i++) {
  console.log("Loop iteration:", i);
}
// make the patterns in js 

let n = 5;

for (let i=1;i<=n;i++){
    let row = "1";
    for (let j=1;j<=i;j++){
        row += "* ";
    }
    console.log(row);
}
// How this works 
// The outer loop (i) runs from 1 to n (5 in this case), controlling the number of rows.
// The inner loop (j) runs from 1 to i, controlling the number of asterisks printed in each row.
// In each iteration of the inner loop, an asterisk followed by a space ("* ") is appended to the row string.
// After the inner loop completes for a particular row, the constructed row string is logged to the console.
// This results in a right-angled triangle pattern of asterisks being printed to the console.

// give me with number wise like what done by one then nested one 
for (let i = 1; i <= 5; i++) {
  let row = ""; 
    for (let j = 1; j <= i; j++) {
        row += j + " "; 
    }
    console.log(row); 
}