// Question - 05
function calculateTime(n) {
  const start = performance.now();
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  const end = performance.now();
  return (end - start) / 1000; // time in seconds
}

console.log(calculateTime(10000));
