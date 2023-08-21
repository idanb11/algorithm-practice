/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  let currentNode = head;
  let nextNode = head.next;
  let previousNode = new ListNode();

  while (nextNode) {
    const tempNextNode = nextNode.next;
    nextNode.next = currentNode;
    currentNode.next = previousNode.val !== 0 ? previousNode : undefined;

    previousNode = currentNode;
    currentNode = nextNode;
    nextNode = tempNextNode;
  }

  return currentNode;
};

const data = [1, 2, 3, 4, 5].map((x) => new ListNode(x));
const testData = data.map((x, i) => {
  x.next = data[i + 1];
  return x;
});

console.dir(testData[0], { depth: null });
console.dir(reverseList(testData[0]), { depth: null });
