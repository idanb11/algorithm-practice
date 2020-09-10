/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const printLinkedList = require("print-linked-list");

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function addTwoNumbers(l1, l2) {
  let newList;
  let lastNode;
  let addToNextSum = 0;
  while (l1 || l2) {
    const val1 = l1?.val;
    const val2 = l2?.val;

    const sum = (val1 || 0) + (val2 || 0) + addToNextSum;
    let newNode;
    if (sum < 10) {
      addToNextSum = 0;
      newNode = new ListNode(sum);
    } else {
      addToNextSum = Math.floor(sum / 10);
      newNode = new ListNode(sum % 10);
    }

    if (!newList) {
      newList = newNode;
    }

    if (lastNode) {
      lastNode.next = newNode;
    }
    lastNode = newNode;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (addToNextSum) {
    lastNode.next = new ListNode(addToNextSum);
  }

  printLinkedList(newList, {valueName: "val"});

  return newList;
}

const l1 = new ListNode(2);
const b = new ListNode(4);
const c = new ListNode(3);
l1.next = b;
b.next = c;
c.next = null;

const l2 = new ListNode(5);
const d = new ListNode(6);
const e = new ListNode(4);
l2.next = d;
d.next = e;
e.next = null;

// printLinkedList(l1, {valueName: "val"});
// printLinkedList(l2, {valueName: "val"});

console.log(addTwoNumbers(new ListNode(5), new ListNode(5)));
