const printLinkedList = require("print-linked-list");

function reverseLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  let currentNode = head; // a
  let prevNode;
  // a->b->c
  // c->b->a

  // a->b
  // b->a

  while (currentNode.next) {
    // currentNode // a
    const nextNode = currentNode.next; // b
    if (currentNode === head) {
      currentNode.next = null;
    } else {
      prevNode = currentNode;
      nextNode.next = prevNode;
    }

    currentNode = nextNode;
    printLinkedList(currentNode);
    // nextNode.next = currentNode;
  }

  // const nextNode = currentNode.next;
  // let prevNode;
  // if (currentNode === head) {
  //   prevNode = null;
  // } else {
  //   prevNode = currentNode;
  // }
  // nextNode.next = currentNode;

  // if (!nextNode.next) {
  //   return nextNode;
  // } else {
  //   //
  //   currentNode = nextNode;
  // }
  // }
  // return head;
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode("A");
const b = new LinkedListNode("B");
const c = new LinkedListNode("C");
const d = new LinkedListNode("D");

a.next = b;
b.next = c;
// c.next = d;
// d.next = null;

printLinkedList(reverseLinkedList(a));
