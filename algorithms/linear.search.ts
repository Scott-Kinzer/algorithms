const linearSearch = (v: number) => {
  const arr = [4, 3, 5, 63, 2, 5, 6, 3, 5, 6];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === v) {
      return i;
    }
  }

  return -1;
};

console.log(linearSearch(3));

// O(n)
