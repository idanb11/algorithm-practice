const list = require("print-linked-list");

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
  while (node) {
    if (node.next.next === null) {
      node.val = node.next.val;
      node.next = null;
      break;
    } else {
      node.val = node.next.val;
      node = node.next;
    }
  }
};

const node4 = new ListNode(4);
const node5 = new ListNode(5);
const node1 = new ListNode(1);
const node9 = new ListNode(9);

node4.next = node5;
node5.next = node1;
node1.next = node9;
console.log(list(node4, {valueName: "val"}));

deleteNode(node5);

console.log(list(node4, {valueName: "val"}));
