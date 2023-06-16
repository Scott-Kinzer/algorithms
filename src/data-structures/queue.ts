class QueueNode {
  value: string;
  nextNode: null | QueueNode;

  constructor(value: string) {
    this.value = value;
    this.nextNode = null;
  }
}

class Queue {
  lastQueue: QueueNode;

  constructor(value: string) {
    this.lastQueue = new QueueNode(value);
  }

  // insert QueueNode to the end of the queue
  enqueue(value: string) {
    const copyLastValue = this.lastQueue;
    const newlastQueue = new QueueNode(value);
    newlastQueue.nextNode = copyLastValue;
    this.lastQueue = newlastQueue;
  }

  // remove first QueueNode
  deqeue() {
    let currentNode = this.lastQueue;

    while (currentNode.nextNode?.nextNode) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = null;
  }

  printAll() {
    let currentNode: null | QueueNode = this.lastQueue;

    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.nextNode;
    }
  }
}

const queue = new Queue('9');
queue.enqueue('10');
queue.enqueue('11');
// queue.printAll();
queue.deqeue();
queue.deqeue();
// queue.printAll();
queue.enqueue('12');
queue.enqueue('13');
queue.enqueue('14');
queue.printAll();
// 11 12 13 14
