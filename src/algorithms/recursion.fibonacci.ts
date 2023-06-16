const countFibonacciRecursion = (n: number): number => {
  if (n < 2) {
    return n;
  }

  return countFibonacciRecursion(n - 1) + countFibonacciRecursion(n - 2);
};

console.log(countFibonacciRecursion(3));

// O(2^n)
