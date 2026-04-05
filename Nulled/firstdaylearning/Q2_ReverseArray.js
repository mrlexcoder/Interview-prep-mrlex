// Q2 - Reverse an Array In Place
// Topic: Arrays | Companies: All Companies
// Approach: Two pointer — swap from both ends moving inward — O(n) time, O(1) space

function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr;
}

// Test
const arr2 = [1, 2, 3, 4, 5];
console.log("Original Array:", [...arr2]);
console.log("Reversed Array:", reverseArray(arr2)); // Output: [5, 4, 3, 2, 1]
