export {};
declare global {
  interface Array<T> {
    bubbleSort(): void;
  }
}

Array.prototype.bubbleSort = function () {
  console.log(this);

  for (let k = 0; k < this.length; k++) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] > this[i + 1]) {
        const copy = this[i + 1];
        this[i + 1] = this[i];
        this[i] = copy;
      }
    }
  }

  console.log(this);
};

[6, 5, 4, 3, 2, 24, 6, 54, 532, 543, 42, 7685, 131].bubbleSort();
