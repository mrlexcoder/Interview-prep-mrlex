// Q11 - Reverse a String
// Topic: Strings | Companies: All Companies
// Approach: Two pointer swap — O(n) time, O(1) space

function reverseString(str) {
  const arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr.join("");
}

// Test
console.log(reverseString("hello"));    // olleh
console.log(reverseString("interview")); // weivretnI... wait
console.log(reverseString("abcde"));    // edcba
