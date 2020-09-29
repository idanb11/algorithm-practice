/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSubPath = function (head, root) {
  const nodes = [];
  nodes.push(root);

  while (nodes.length) {
    const node = nodes.pop();

    if (node.val === head.val) {
      let listNode = head.next;
      let rightNode = node.right;
      let leftNode = node.left;
      let isValid = false;
      while (listNode) {
        if (leftNode && leftNode.val === listNode.val) {
          console.log("leftNode", leftNode);
          isValid = true;
        }

        if (rightNode && rightNode.val === listNode.val) {
          console.log("rightNode", rightNode);
          isValid = true;
        }

        if (isValid) {
          listNode = listNode.next;
        }
      }
    }

    if (node.left) {
      nodes.push(node.left);
    }

    if (node.right) {
      nodes.push(node.right);
    }
  }
  return false;
};
