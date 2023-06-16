const isPowerOfTwo = (n: number): boolean => {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
};

const isPowerOfTwoBitwise = (n: number) => {
  if (n < 1) return false;

  /*
    00001000 8
    00000111 7
    00000000 0
  */

  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(3)); // false
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(7)); // false
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwoBitwise(16)); // true

// O(log(n))
