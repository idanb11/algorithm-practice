const printLinkedList = require("print-linked-list");

//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  const arr1 = [];
  const arr2 = [];

  while (node1) {
    arr1.push(node1.val);
    node1 = node1.next;
  }

  while (node2) {
    arr2.push(node2.val);
    node2 = node2.next;
  }

  let addToNextSum = 0;
  let lastNode;

  while (arr1.length || arr2.length) {
    let newNode;
    const num1 = arr1.pop();
    const num2 = arr2.pop();
    const sum = (num1 || 0) + (num2 || 0) + addToNextSum;

    if (sum < 10) {
      addToNextSum = 0;
      newNode = new ListNode(sum, lastNode || null);
    } else {
      addToNextSum = Math.floor(sum / 10);
      newNode = new ListNode(sum % 10, lastNode || null);
    }
    lastNode = newNode;
  }

  if (addToNextSum) {
    lastNode = new ListNode(addToNextSum, lastNode || null);
  }

  printLinkedList(lastNode, {valueName: "val"});
  return lastNode;
};

const l1 = new ListNode(7);
const b = new ListNode(2);
const c = new ListNode(4);
const d = new ListNode(3);

l1.next = b;
b.next = c;
c.next = d;
d.next = null;

const l2 = new ListNode(5);
const e = new ListNode(6);
const f = new ListNode(4);
l2.next = e;
e.next = f;
f.next = null;

addTwoNumbers(l1, l2);
