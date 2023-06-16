const quickSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0];

  const left: number[] = [];
  const right: number[] = [];

  arr.slice(1).forEach((num) => {
    if (num >= pivot) {
      right.push(num);
    } else {
      left.push(num);
    }
  });

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([1, 6, 3, 5, 7, 8, 3, 6, 3, 2]));
