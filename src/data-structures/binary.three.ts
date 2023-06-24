class Node {
  left: null | Node;
  right: null | Node;
  value: number;

  constructor(value: number) {
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

  insert(value: number) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return;
    }

    this.insertNode(this.root, node);
  }

  insertNode(root: Node, newNode: Node) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
        return;
      }

      this.insertNode(root.left, newNode);
    } else {
      if (root.right === null) {
        root.right = newNode;
        return;
      }

      this.insertNode(root.right, newNode);
    }
  }

  search(root: Node | null, value: number): Node | null {
    if (!root) return null;

    if (root.value === value) {
      return root;
    }

    if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }
}

const binary = new BinaryTree();

binary.insert(5);
binary.insert(2);
binary.insert(7);

console.log(binary.search(binary.root, 5));
console.log(binary.search(binary.root, 6));
console.log(binary.search(binary.root, 7));
console.log(binary.search(binary.root, 2));
