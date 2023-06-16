const countFactorial = (n: number): number => {
  if (n <= 1) return 1;

  let count = n;
  let result = n;

  while (count !== 2) {
    count--;

    result = result * count;
  }

  return result;
};

console.log(countFactorial(4)); // 24
console.log(countFactorial(10)); // 3628800
console.log(countFactorial(0)); // 1
console.log(countFactorial(2)); // 2

// O(n)
