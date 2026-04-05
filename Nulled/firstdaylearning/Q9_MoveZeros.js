// Q9 - Move All Zeros to End
// Topic: Arrays | Companies: TCS, HCL
// Approach: Two pointer — track non-zero position, swap zeros to end — O(n) time, O(1) space

function moveZeros(arr) {
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos] = arr[i];
      pos++;
    }
  }

  while (pos < arr.length) {
    arr[pos] = 0;
    pos++;
  }

  return arr;
}

// Test
const arr1 = [0, 1, 0, 3, 12];
console.log("Original:", [...arr1]);
console.log("After moving zeros:", moveZeros(arr1)); // [1, 3, 12, 0, 0]

const arr2 = [0, 0, 1, 0, 2, 3];
console.log("\nOriginal:", [...arr2]);
console.log("After moving zeros:", moveZeros(arr2)); // [1, 2, 3, 0, 0, 0]
