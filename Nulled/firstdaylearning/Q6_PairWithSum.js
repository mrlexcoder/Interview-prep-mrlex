// Q6 - Find Pair with Given Sum in Sorted Array
// Topic: Arrays | Companies: TCS NQT, Amazon
// Approach: Two pointer — move left/right based on sum comparison — O(n) time, O(1) space

function findPair(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return "No pair found";
}

// Test
const arr = [1, 2, 3, 4, 6, 8, 9];
console.log("Array:", arr);
console.log("Pair with sum 10:", findPair(arr, 10)); // [1, 9]
console.log("Pair with sum 7:", findPair(arr, 7));   // [3, 4]
console.log("Pair with sum 20:", findPair(arr, 20)); // No pair found
