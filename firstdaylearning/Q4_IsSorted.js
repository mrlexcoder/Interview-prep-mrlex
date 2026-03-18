// Q4 - Check if Array is Sorted (Ascending)
// Topic: Arrays | Companies: Wipro, HCL
// Approach: Compare adjacent elements — if any arr[i] > arr[i+1], not sorted — O(n) time, O(1) space

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

// Test
const arr1 = [1, 2, 3, 4, 5];
console.log("Array:", arr1);
console.log("Is Sorted:", isSorted(arr1)); // true

const arr2 = [1, 3, 2, 4, 5];
console.log("\nArray:", arr2);
console.log("Is Sorted:", isSorted(arr2)); // false
