const countFibonacci = (n: number): number => {
  let current = 1;
  let prev = 0;
  const arr: number[] = [prev, current];

  for (let index = 2; index < n; index++) {
    const temp = current;
    current = current + prev;
    prev = temp;

    arr.push(current);
  }

  console.log(arr);

  return current;
};

console.log(countFibonacci(8)); // 13

// O(n)
