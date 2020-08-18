class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function kthToLastNode(k, listHead) {
  let startStick = listHead;
  let currentNode = listHead;
  let endStick;

  for (let index = 1; index < k; index++) {
    currentNode = currentNode.next;
  }

  endStick = currentNode;

  while (endStick.next) {
    startStick = startStick.next;
    endStick = endStick.next;
  }

  return startStick;

  // let nodesCount = 0;
  // let currentNode = listHead;

  // while (currentNode) {
  //   nodesCount++;
  //   currentNode = currentNode.next;
  // }

  // currentNode= listHead;

  // for (let index = 0; index < nodesCount - k; index++) {
  //   currentNode = currentNode.next;
  // }
  // console.log(nodes);

  // const index = nodes.length - k;
  // return nodes[index];
  // return currentNode;
}

const a = new LinkedListNode("a");
const b = new LinkedListNode("b");
const c = new LinkedListNode("c");
const d = new LinkedListNode("d");
const e = new LinkedListNode("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));
// Returns the node with value "D" (the 2nd to last node)
