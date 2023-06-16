class ListNode {
  val: number;
  next: null | ListNode;
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
// not effective algorithm since we iterate through copy list every cycle
function mergeTwoLists(list1: ListNode, list2: ListNode) {
  const dummyHead = new ListNode();
  let p1: null | ListNode = list1;
  let p2: null | ListNode = list2;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      let node = dummyHead;

      while (node.next) {
        node = node.next;
      }

      node.next = p1;
      const copy: null | ListNode = p1.next;

      node.next.next = null;

      p1 = copy;
    } else {
      let node = dummyHead;

      while (node.next) {
        node = node.next;
      }

      node.next = p2;
      const copy: null | ListNode = p2.next;

      node.next.next = null;

      p2 = copy;
    }
  }

  let node = dummyHead;

  while (node.next) {
    node = node.next;
  }

  node.next = p1 ?? p2;

  return dummyHead.next;
}

const list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

const list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);

const mergedList = mergeTwoLists(list1, list2);

let mergedListCopy = mergedList;

while (mergedListCopy?.next) {
  console.log(mergedListCopy.next);
  mergedListCopy = mergedListCopy.next;
}
