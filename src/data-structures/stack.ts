class StackNode {
  value: string;
  prevNode: StackNode | null;

  constructor(value: string) {
    this.value = value;
    this.prevNode = null;
  }
}

class Stack {
  lastStackNode: null | StackNode;

  constructor(value: string) {
    this.lastStackNode = new StackNode(value);
  }

  add(value: string) {
    const lastStackNode = new StackNode(value);

    lastStackNode.prevNode = this.lastStackNode;

    this.lastStackNode = lastStackNode;
  }

  remove() {
    if (this.lastStackNode) {
      this.lastStackNode = this.lastStackNode?.prevNode;
    }
  }

  printAll() {
    let currentNode: null | StackNode = this.lastStackNode;

    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.prevNode;
    }
  }
}

const stack = new Stack('5');
stack.add('6');
stack.add('7');
stack.remove();
stack.add('8');
stack.remove();
stack.printAll();

// 5 6
