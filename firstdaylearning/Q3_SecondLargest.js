// Q3 - Find Second Largest Element in Array
// Topic: Arrays | Companies: TCS NQT, CTS
// Approach: One pass — track both largest and second largest — O(n) time, O(1) space

function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] !== first) {
      second = arr[i];
    }
  }

  if (second === -Infinity) {
    return "No second largest element found";
  }
  return second;
}

// Test
const arr3 = [10, 5, 8, 20, 15];
console.log("Array:", arr3);
console.log("Second Largest:", secondLargest(arr3)); // Output: 15

const arr4 = [5, 5, 5];
console.log("\nArray:", arr4);
console.log("Second Largest:", secondLargest(arr4)); // Output: No second largest
