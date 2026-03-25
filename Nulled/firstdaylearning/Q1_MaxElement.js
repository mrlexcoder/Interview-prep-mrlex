// Q1 - Find Maximum Element in Array
// Topic: Arrays | Companies: TCS, Wipro, Infosys
// Approach: Loop through array, track max value — O(n) time, O(1) space

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Test
const arr1 = [3, 7, 1, 9, 4, 6];
console.log("Array:", arr1);
console.log("Maximum Element:", findMax(arr1)); // Output: 9
