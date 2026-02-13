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

// Q1: Remove duplicates from array
console.log("Q1: Remove Duplicates");
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(duplicates)];
console.log("Input:", duplicates);
console.log("Output:", unique);

// Q2: Find second largest number
console.log("\nQ2: Second Largest Number");
function secondLargest(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => b - a);
    return sorted[1];
}
const nums1 = [10, 5, 20, 8, 20];
console.log("Input:", nums1);
console.log("Second Largest:", secondLargest(nums1));

// Q3: Rotate array by k positions
console.log("\nQ3: Rotate Array");
function rotateArray(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}
const rotateInput = [1, 2, 3, 4, 5];
console.log("Input:", rotateInput);
console.log("Rotated by 2:", rotateArray(rotateInput, 2));

// Q4: Find missing number in sequence
console.log("\nQ4: Find Missing Number");
function findMissing(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
}
const sequence = [1, 2, 4, 5, 6];
console.log("Input:", sequence);
console.log("Missing Number:", findMissing(sequence));

// Q5: Merge two sorted arrays
console.log("\nQ5: Merge Sorted Arrays");
function mergeSorted(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
const sorted1 = [1, 3, 5];
const sorted2 = [2, 4, 6];
console.log("Array 1:", sorted1);
console.log("Array 2:", sorted2);
console.log("Merged:", mergeSorted(sorted1, sorted2));

// Q6: Find intersection of two arrays
console.log("\nQ6: Array Intersection");
function intersection(arr1, arr2) {
    return arr1.filter(x => arr2.includes(x));
}
const a1 = [1, 2, 3, 4];
const a2 = [3, 4, 5, 6];
console.log("Array 1:", a1);
console.log("Array 2:", a2);
console.log("Intersection:", intersection(a1, a2));

// Q7: Chunk array into smaller arrays
console.log("\nQ7: Chunk Array");
function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
const toChunk = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Input:", toChunk);
console.log("Chunked by 3:", chunkArray(toChunk, 3));

// Q8: Flatten nested array (without flat())
console.log("\nQ8: Flatten Array (Manual)");
function flattenArray(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []
    );
}
const deepNested = [1, [2, [3, [4]], 5]];
console.log("Input:", deepNested);
console.log("Flattened:", flattenArray(deepNested));

// Q9: Find pairs that sum to target
console.log("\nQ9: Find Pairs with Target Sum");
function findPairs(arr, target) {
    const pairs = [];
    const seen = new Set();
    for (let num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }
    return pairs;
}
const pairArr = [1, 2, 3, 4, 5, 6];
const target = 7;
console.log("Input:", pairArr);
console.log("Target:", target);
console.log("Pairs:", findPairs(pairArr, target));

// Q10: Move zeros to end
console.log("\nQ10: Move Zeros to End");
function moveZeros(arr) {
    const nonZeros = arr.filter(x => x !== 0);
    const zeros = arr.filter(x => x === 0);
    return [...nonZeros, ...zeros];
}
const withZeros = [0, 1, 0, 3, 12];
console.log("Input:", withZeros);
console.log("Output:", moveZeros(withZeros));

// Q11: Find most frequent element
console.log("\nQ11: Most Frequent Element");
function mostFrequent(arr) {
    const freq = {};
    let maxCount = 0;
    let result = arr[0];
    
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxCount) {
            maxCount = freq[num];
            result = num;
        }
    }
    return result;
}
const freqArr = [1, 3, 2, 3, 4, 3, 5];
console.log("Input:", freqArr);
console.log("Most Frequent:", mostFrequent(freqArr));

// Q12: Check if array is sorted
console.log("\nQ12: Check if Sorted");
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}
console.log("[1,2,3,4] is sorted:", isSorted([1, 2, 3, 4]));
console.log("[1,3,2,4] is sorted:", isSorted([1, 3, 2, 4]));

// Q13: Array difference
console.log("\nQ13: Array Difference");
function arrayDiff(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x));
}
const diff1 = [1, 2, 3, 4, 5];
const diff2 = [3, 4, 5, 6];
console.log("Array 1:", diff1);
console.log("Array 2:", diff2);
console.log("Difference:", arrayDiff(diff1, diff2));

// Q14: Group by property
console.log("\nQ14: Group By Property");
const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 30 }
];
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const keyValue = obj[key];
        if (!acc[keyValue]) acc[keyValue] = [];
        acc[keyValue].push(obj);
        return acc;
    }, {});
}
console.log("Input:", people);
console.log("Grouped by age:", groupBy(people, "age"));

// Q15: Binary search
console.log("\nQ15: Binary Search");
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
const searchArr = [1, 3, 5, 7, 9, 11];
console.log("Array:", searchArr);
console.log("Search for 7:", binarySearch(searchArr, 7));
console.log("Search for 6:", binarySearch(searchArr, 6));

console.log("\n=== ADVANCED CONCEPTS ===\n");

// Spread operator
console.log("Spread Operator:");
const arr7 = [1, 2, 3];
const arr8 = [...arr7, 4, 5];
console.log("Original:", arr7);
console.log("Spread:", arr8);

// Destructuring
console.log("\nDestructuring:");
const [first1, second, ...rest] = [1, 2, 3, 4, 5];
console.log("first:", first1, "second:", second, "rest:", rest);

// Array.from with mapping
console.log("\nArray.from with mapping:");
const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log("Range 1-5:", range);

// Multi-dimensional arrays
console.log("\nMulti-dimensional Array:");
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrix);
console.log("Element [1][2]:", matrix[1][2]);

console.log("\n=== COMPLETED ===");
