// ============================================
// ARRAY CONCEPTS FOR INTERVIEWS
// ============================================

console.log("=== ARRAY BASICS ===\n");

// 1. Array Creation
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(5); // Creates array with 5 empty slots
const arr3 = Array.of(1, 2, 3);
const arr4 = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']

console.log("Array Creation:");
console.log("arr1:", arr1);
console.log("arr2:", arr2);
console.log("arr3:", arr3);
console.log("arr4:", arr4);

// 2. Array Length
console.log("\nArray Length:", arr1.length);

// 3. Accessing Elements
console.log("\nAccessing Elements:");
console.log("First element:", arr1[0]);
console.log("Last element:", arr1[arr1.length - 1]);

console.log("\n=== ARRAY METHODS ===\n");

// 4. push() - Add to end
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log("After push:", fruits);

// 5. pop() - Remove from end
const removed = fruits.pop();
console.log("After pop:", fruits, "| Removed:", removed);

// 6. unshift() - Add to beginning
fruits.unshift("mango");
console.log("After unshift:", fruits);

// 7. shift() - Remove from beginning
const first = fruits.shift();
console.log("After shift:", fruits, "| Removed:", first);

// 8. splice() - Add/Remove elements
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 10, 20); // At index 2, remove 1, add 10, 20
console.log("\nAfter splice:", numbers);

// 9. slice() - Extract portion (doesn't modify original)
const sliced = numbers.slice(1, 4);
console.log("Sliced (1 to 4):", sliced);
console.log("Original:", numbers);

// 10. concat() - Merge arrays
const arr5 = [1, 2];
const arr6 = [3, 4];
const merged = arr5.concat(arr6, [5, 6]);
console.log("\nConcatenated:", merged);

// 11. join() - Array to string
const words = ["Hello", "World"];
console.log("\nJoined:", words.join(" "));

// 12. reverse() - Reverse array (modifies original)
const rev = [1, 2, 3, 4];
rev.reverse();
console.log("Reversed:", rev);

// 13. sort() - Sort array
const unsorted = [3, 1, 4, 1, 5, 9];
console.log("\nDefault sort:", unsorted.sort());
const nums = [3, 1, 4, 1, 5, 9];
console.log("Numeric sort:", nums.sort((a, b) => a - b));

console.log("\n=== ITERATION METHODS ===\n");

// 14. forEach() - Execute function for each element
const items = [1, 2, 3];
console.log("forEach:");
items.forEach((item, index) => console.log(`  Index ${index}: ${item}`));

// 15. map() - Transform each element
const doubled = items.map(x => x * 2);
console.log("\nmap (doubled):", doubled);

// 16. filter() - Filter elements
const filtered = [1, 2, 3, 4, 5, 6].filter(x => x % 2 === 0);
console.log("filter (even numbers):", filtered);

// 17. reduce() - Reduce to single value
const sum = [1, 2, 3, 4, 5].reduce((acc, curr) => acc + curr, 0);
console.log("reduce (sum):", sum);

// 18. find() - Find first matching element
const found = [1, 2, 3, 4, 5].find(x => x > 3);
console.log("find (first > 3):", found);

// 19. findIndex() - Find index of first match
const foundIndex = [1, 2, 3, 4, 5].findIndex(x => x > 3);
console.log("findIndex (first > 3):", foundIndex);

// 20. some() - Check if any element matches
const hasEven = [1, 3, 5, 6].some(x => x % 2 === 0);
console.log("some (has even):", hasEven);

// 21. every() - Check if all elements match
const allEven = [2, 4, 6].every(x => x % 2 === 0);
console.log("every (all even):", allEven);

// 22. includes() - Check if value exists
const hasThree = [1, 2, 3].includes(3);
console.log("includes (has 3):", hasThree);

// 23. indexOf() - Find first index of value
const index = [1, 2, 3, 2].indexOf(2);
console.log("indexOf (2):", index);

// 24. lastIndexOf() - Find last index of value
const lastIndex = [1, 2, 3, 2].lastIndexOf(2);
console.log("lastIndexOf (2):", lastIndex);

// 25. flat() - Flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("\nflat (depth 1):", nested.flat());
console.log("flat (depth 2):", nested.flat(2));

// 26. flatMap() - Map then flatten
const flatMapped = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log("flatMap:", flatMapped);

console.log("\n=== INTERVIEW QUESTIONS ===\n");
