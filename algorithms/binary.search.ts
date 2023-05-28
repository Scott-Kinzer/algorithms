const binarySearch = (v: number): number => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middleElementIndex = Math.floor((start + end) / 2);

    if (v === arr[middleElementIndex]) return middleElementIndex;

    if (v < arr[middleElementIndex]) {
      end = middleElementIndex - 1;
    } else {
      start = middleElementIndex + 1;
    }
  }

  return -1;
};

console.log(binarySearch(5)); // 4 index
console.log(binarySearch(3)); // 2 index
console.log(binarySearch(7)); // 6 index
console.log(binarySearch(20)); // -1 index

// O(log(n))
