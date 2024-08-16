// Question - 01
function isAnagram(str1, str2) {
  // Remove spaces and convert strings to lowercase
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters in each string and compare the results
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  return str1 === str2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
