// Question - 06
function countVowels(str) {
  return (str.match(/[aeiouAEIOU]/g) || []).length;
}

console.log(countVowels("Hello, World!"));
