// ============================================
// JAVASCRIPT LOOPS - COMPLETE GUIDE
// ============================================

console.log("=== 1. FOR LOOP ===");
// Basic for loop - most common loop
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration:", i);
}

// For loop with array
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

// For loop - counting backwards
for (let i = 5; i > 0; i--) {
    console.log("Countdown:", i);
}

// For loop - skip iterations
for (let i = 0; i < 10; i += 2) {
    console.log("Even numbers:", i);
}


console.log("\n=== 2. WHILE LOOP ===");
// While loop - runs while condition is true
let count = 0;
while (count < 5) {
    console.log("While loop count:", count);
    count++;
}

// While loop with array
let index = 0;
const colors = ["red", "green", "blue"];
while (index < colors.length) {
    console.log("Color:", colors[index]);
    index++;
}


console.log("\n=== 3. DO-WHILE LOOP ===");
// Do-while loop - executes at least once
let num = 0;
do {
    console.log("Do-while iteration:", num);
    num++;
} while (num < 3);

// Do-while - runs at least once even if condition is false
let x = 10;
do {
    console.log("This runs once even though x >= 10:", x);
} while (x < 5);


console.log("\n=== 4. FOR...OF LOOP ===");
// For...of - iterates over iterable objects (arrays, strings, etc.)
const animals = ["dog", "cat", "bird"];
for (const animal of animals) {
    console.log("Animal:", animal);
}

// For...of with strings
const word = "Hello";
for (const char of word) {
    console.log("Character:", char);
}

// For...of with Set
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
for (const num of uniqueNumbers) {
    console.log("Unique number:", num);
}


console.log("\n=== 5. FOR...IN LOOP ===");
// For...in - iterates over object properties
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// For...in with arrays (not recommended - use for...of instead)
const numbers = [10, 20, 30];
for (const index in numbers) {
    console.log(`Index ${index}: ${numbers[index]}`);
}


console.log("\n=== 6. FOREACH METHOD ===");
// forEach - array method for iteration
const cities = ["Paris", "London", "Tokyo"];
cities.forEach(function(city, index) {
    console.log(`City ${index + 1}: ${city}`);
});

// forEach with arrow function
const prices = [10, 20, 30, 40];
prices.forEach((price, index) => {
    console.log(`Item ${index}: $${price}`);
});


console.log("\n=== 7. MAP METHOD ===");
// map - creates new array with transformed values
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(num => num * 2);
console.log("Original:", nums);
console.log("Doubled:", doubled);

const names = ["alice", "bob", "charlie"];
const upperNames = names.map(name => name.toUpperCase());
console.log("Uppercase names:", upperNames);


console.log("\n=== 8. FILTER METHOD ===");
// filter - creates new array with elements that pass test
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNums = allNumbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNums);

const ages = [12, 18, 25, 16, 30, 14];
const adults = ages.filter(age => age >= 18);
console.log("Adults:", adults);


console.log("\n=== 9. REDUCE METHOD ===");
// reduce - reduces array to single value
const values = [1, 2, 3, 4, 5];
const sum = values.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum:", sum);

const items = [
    { name: "Book", price: 10 },
    { name: "Pen", price: 5 },
    { name: "Notebook", price: 15 }
];
const total = items.reduce((acc, item) => acc + item.price, 0);
console.log("Total price:", total);


console.log("\n=== 10. BREAK AND CONTINUE ===");
// break - exits the loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at", i);
        break;
    }
    console.log("Break example:", i);
}

// continue - skips current iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skipping", i);
        continue;
    }
    console.log("Continue example:", i);
}


console.log("\n=== 11. NESTED LOOPS ===");
// Nested loops - loop inside another loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

// Multiplication table
console.log("\nMultiplication Table:");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}


console.log("\n=== 12. LOOP WITH OBJECTS ===");
// Object.keys()
const car = { brand: "Toyota", model: "Camry", year: 2020 };
Object.keys(car).forEach(key => {
    console.log(`${key}: ${car[key]}`);
});

// Object.values()
console.log("\nValues:", Object.values(car));

// Object.entries()
Object.entries(car).forEach(([key, value]) => {
    console.log(`${key} => ${value}`);
});


console.log("\n=== 13. SOME AND EVERY ===");
// some - checks if at least one element passes test
const scores = [45, 67, 89, 23, 90];
const hasHighScore = scores.some(score => score > 80);
console.log("Has score above 80?", hasHighScore);

// every - checks if all elements pass test
const allPassed = scores.every(score => score >= 50);
console.log("All scores >= 50?", allPassed);


console.log("\n=== 14. FIND AND FINDINDEX ===");
// find - returns first element that matches
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];
const user = users.find(u => u.id === 2);
console.log("Found user:", user);

// findIndex - returns index of first match
const userIndex = users.findIndex(u => u.name === "Charlie");
console.log("User index:", userIndex);


console.log("\n=== 15. INFINITE LOOPS (BE CAREFUL!) ===");
// Uncomment to see infinite loop (will crash!)
// while (true) {
//     console.log("This runs forever!");
// }

// Safe way with break condition
let counter = 0;
while (true) {
    console.log("Safe infinite loop:", counter);
    counter++;
    if (counter >= 3) {
        break;
    }
}


console.log("\n=== 16. LOOP PERFORMANCE TIPS ===");
// Cache array length for better performance
const largeArray = Array.from({ length: 1000 }, (_, i) => i);
console.time("Without caching");
for (let i = 0; i < largeArray.length; i++) {
    // Do something
}
console.timeEnd("Without caching");

console.time("With caching");
const len = largeArray.length;
for (let i = 0; i < len; i++) {
    // Do something
}
console.timeEnd("With caching");


console.log("\n=== LOOP CONCEPTS COMPLETE ===");
