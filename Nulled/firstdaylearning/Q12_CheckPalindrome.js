// Q12 - Check if String is Palindrome
// Topic: Strings | Companies: TCS, Wipro, Infosys
// Approach: Two pointer — compare s[i] and s[n-1-i] — O(n) time, O(1) space

function isPalindrome(str) {
  const s = str.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

// Test
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("Level"));   // true (case insensitive)
