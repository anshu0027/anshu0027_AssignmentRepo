// Question - 13
function countOccurrences(str, char) {
  return (str.match(new RegExp(char, "g")) || []).length;
}

console.log(countOccurrences("hello", "l"));
