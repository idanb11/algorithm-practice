function containsCycle(head) {
  const nodes = new Set();

  let currentNode = head;

  for (; currentNode.next; ) {
    if (!nodes.has(currentNode)) {
      nodes.add(currentNode);
      currentNode = currentNode.next;
    } else {
      return true;
    }
  }

  return false;
}

function containsCycle2(head) {
  let slowRunner = head;
  let fastRunner = head;

  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next;

    if (fastRunner.next.next) {
      fastRunner = fastRunner.next.next;
    } else {
      return false;
    }

    if (slowRunner === fastRunner) {
      return true;
    }
  }
  return false;
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
d.next = d;

console.log(containsCycle2(a));
