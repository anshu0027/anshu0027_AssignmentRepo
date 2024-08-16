// Question - 14
function findCommonElements(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}

console.log(findCommonElements([1, 2, 3], [3, 4, 5]));
