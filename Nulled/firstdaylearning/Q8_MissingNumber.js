// Q8 - Find Missing Number in Array 1 to N
// Topic: Arrays | Companies: All Companies
// Approach: Sum formula — expected sum minus actual sum = missing — O(n) time, O(1) space

function findMissing(arr) {
  const n = arr.length + 1; // original array had n elements
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, val) => acc + val, 0);
  return expectedSum - actualSum;
}

// Test
const arr1 = [1, 2, 3, 5, 6];
console.log("Array:", arr1);
console.log("Missing Number:", findMissing(arr1)); // 4

const arr2 = [2, 3, 4, 5, 6];
console.log("\nArray:", arr2);
console.log("Missing Number:", findMissing(arr2)); // 1
