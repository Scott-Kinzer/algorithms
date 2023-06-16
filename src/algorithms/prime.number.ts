const isPrimeNumber = (number: number): boolean => {
  if (number < 2) return false;
  if (number === 2) return true;

  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
};

console.log(isPrimeNumber(5)); // true
console.log(isPrimeNumber(12)); // false
console.log(isPrimeNumber(13)); // true
console.log(isPrimeNumber(1)); // false

// O(sqrt(n))
