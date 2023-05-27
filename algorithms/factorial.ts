const factorialCount = (n: number): number => {
  if (n <= 1) return 1;

  let count = n;
  let result = n;

  while (count !== 2) {
    count--;

    result = result * count;
  }

  return result;
};

console.log(factorialCount(4)); // 24
console.log(factorialCount(10)); // 3628800
console.log(factorialCount(0)); // 1

// O(n)
