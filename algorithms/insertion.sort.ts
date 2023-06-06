const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  console.log(arr);
};

insertionSort([3, 5, 64, 2, 6, 1, 5]);
