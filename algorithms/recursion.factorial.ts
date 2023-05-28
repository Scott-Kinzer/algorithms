const countFactorialRecursion = (n: number): number => {
  if (n < 2) {
    return 1;
  }

  return n * countFactorialRecursion(n - 1);
};

console.log(countFactorialRecursion(3)); // 6
console.log(countFactorialRecursion(1)); // 1
console.log(countFactorialRecursion(0)); // 1
console.log(countFactorialRecursion(5)); // 120

// 0(n)
