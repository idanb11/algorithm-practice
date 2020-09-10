function swapPairs(head) {
  if (!head || !head.next) {
    return head;
  }

  const post = swapPairs(head.next.next);
  const res = head.next;
  res.next = head;
  head.next = post;

  return res;
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
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

console.log(JSON.stringify(swapPairs(a), 2, null));
