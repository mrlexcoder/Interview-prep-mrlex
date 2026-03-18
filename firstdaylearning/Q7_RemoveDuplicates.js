// Q7 - Remove Duplicates from Sorted Array (In Place)
// Topic: Arrays | Companies: Wipro, Infosys
// Approach: Two pointer — j tracks last unique, i scans ahead — O(n) time, O(1) space

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  return arr.slice(0, j + 1);
}

// Test
const arr1 = [1, 1, 2, 2, 3, 4, 4, 5];
console.log("Original:", arr1);
console.log("After removing duplicates:", removeDuplicates(arr1)); // [1, 2, 3, 4, 5]

const arr2 = [1, 1, 1, 1];
console.log("\nOriginal:", arr2);
console.log("After removing duplicates:", removeDuplicates(arr2)); // [1]
