/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  if (!head || !head.val === val) {
    return head;
  }

  let node = head;

  while (node) {
    if (node.val === val) {
      node = node.next;
    } else if (node.next && node.next.val === val) {
      node.next = node.next.next;
    } else {
      node = node.next;
    }
  }

  if (head.val === val) return head.next;

  return head;
};
