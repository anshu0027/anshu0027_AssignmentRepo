// Question - 04
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, "");

  // Check if the cleaned string is equal to its reverse
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("Hello, World!"));
