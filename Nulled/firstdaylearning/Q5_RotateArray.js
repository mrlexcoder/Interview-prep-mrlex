// Q5 - Rotate Array by K Positions
// Topic: Arrays | Companies: Infosys, TCS
// Approach: Reverse method — reverse all, reverse first k, reverse rest — O(n) time, O(1) space

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // handle k greater than array length

  reverse(arr, 0, n - 1);   // step 1: reverse entire array
  reverse(arr, 0, k - 1);   // step 2: reverse first k elements
  reverse(arr, k, n - 1);   // step 3: reverse remaining elements

  return arr;
}

// Test
const arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log("Original:", [...arr1]);
console.log("Rotated by 3:", rotateArray(arr1, 3)); // [5, 6, 7, 1, 2, 3, 4]

const arr2 = [10, 20, 30, 40, 50];
console.log("\nOriginal:", [...arr2]);
console.log("Rotated by 2:", rotateArray(arr2, 2)); // [40, 50, 10, 20, 30]
