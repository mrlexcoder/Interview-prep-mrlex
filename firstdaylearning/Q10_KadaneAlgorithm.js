// Q10 - Kadane's Algorithm — Maximum Subarray Sum
// Topic: Arrays | Companies: Flipkart, Amazon, TCS NQT
// Approach: Dynamic programming — track max_here, reset if negative, track max_so_far — O(n) time, O(1) space

function maxSubarraySum(arr) {
  let maxHere = arr[0];
  let maxSoFar = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxHere = Math.max(arr[i], maxHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxHere);
  }

  return maxSoFar;
}

// Test
const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Array:", arr1);
console.log("Max Subarray Sum:", maxSubarraySum(arr1)); // 6 → [4, -1, 2, 1]

const arr2 = [1, 2, 3, 4, 5];
console.log("\nArray:", arr2);
console.log("Max Subarray Sum:", maxSubarraySum(arr2)); // 15

const arr3 = [-3, -1, -2, -4];
console.log("\nArray:", arr3);
console.log("Max Subarray Sum:", maxSubarraySum(arr3)); // -1
