class Node {
  left: null | Node;
  right: null | Node;
  value: string;

  constructor(value: string) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: null | Node;

  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }
}
