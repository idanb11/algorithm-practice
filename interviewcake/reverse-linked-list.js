const printLinkedList = require("print-linked-list");

function reverseLinkedList(head) {
  if (!head || !head.next) {
    return head;
  }

  let currentNode = head;
  let prevNode = null;

  while (currentNode !== null) {
    const nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }

  return prevNode;
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
c.next = d;
d.next = null;

// printLinkedList(reverseLinkedList(a));


function reverseLinkedListRecursion(head) {
  if (!head || !head.next) {
    return head;
  }

  

  const newHeadNode = reverseLinkedListRecursion(head.next);
  console.log(newHeadNode);
  // change references for middle chain
  console.log(head);
  head.next.next = head;
  console.log(head);
  head.next = null;
  console.log(head);
  console.log("--------------------\n");

  // send back new head node in every recursion
  return newHeadNode;
}

printLinkedList(reverseLinkedListRecursion(a));
