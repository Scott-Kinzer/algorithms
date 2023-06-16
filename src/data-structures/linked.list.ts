class Node {
  value: null | string;
  next: null | Node;

  constructor(data: string) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  head: null | Node;

  constructor(head = null) {
    this.head = head;
  }

  appendNode(newNode: Node) {
    let node = this.head;
    if (node == null) {
      this.head = newNode;
      return;
    }
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }

  removeFrom(index: number) {
    let node = this.head;
    if (index === 0) {
      if (node !== null) {
        // remove first node and set up next node as head
        node = node.next;
        this.head = node;
      } else throw Error('Index Out of Bound');

      return;
    }
    while (--index) {
      if (node?.next) node = node.next;
    }

    if (node?.next) {
      // remove this nextNode
      const nextNode = node?.next;

      node.next = nextNode.next;
    }
  }

  insertAt(index: number, newNode: Node) {
    let node = this.head;
    if (index == 0) {
      newNode.next = node;
      this.head = newNode;
      return;
    }
    while (--index) {
      if (node?.next) node = node?.next;
    }

    if (node?.next) {
      const tempVal = node.next;
      node.next = newNode;
      newNode.next = tempVal;
    }
  }

  printList() {
    const arr = [];
    let node = this.head;

    while (node) {
      arr.push(node);
      node = node?.next;
    }

    console.log(arr);
  }
}

const myList = new LinkedList();
const node = new Node('5');

myList.appendNode(node);
myList.appendNode(new Node('11'));
myList.appendNode(new Node('19'));
myList.appendNode(new Node('4'));
myList.insertAt(3, new Node('21'));
myList.printList();

myList.removeFrom(3);

myList.printList();
