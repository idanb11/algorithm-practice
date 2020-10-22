// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = function (root, val) {
  if (!root) {
    root = new TreeNode(val, null, null);
    return root;
  }
  
  recurse(root, val);
  console.log(root);
  return root;
};

function recurse(node, value) {
  if (!node) {
    node = new TreeNode(value, null, null);
    return node;
  }

  if (value > node.val) {
    if (node.right) {
      recurse(node.right, value);
    } else {
      const newNode = new TreeNode(value, null, null);
      node.right = newNode;
      return;
    }
  } else {
    if (node.left) {
      recurse(node.left, value);
    } else {
      const newNode = new TreeNode(value, null, null);
      node.left = newNode;
      return;
    }
  }
}
