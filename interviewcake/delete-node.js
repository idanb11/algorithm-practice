class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode("A");
const b = new LinkedListNode("B");
const c = new LinkedListNode("C");

a.next = b;
b.next = c;

function deleteNode(node) {
  if (node.next) {
    const nextNode = node;

    nextNode.value = node.next.value;
    nextNode.next = node.next.next;
  } else {
    throw new Error("Cannot delete last node");
  }
}

deleteNode(b);
