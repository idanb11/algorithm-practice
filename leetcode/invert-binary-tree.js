/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) {
    return root;
  }

  // recursive
  // [root.right, root.left] = [invertTree(root.left), invertTree(root.right)];

  // iterative
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    [node.left, node.right] = [node.right, node.left];

    if (node.left != null) queue.push(node.left);
    if (node.right != null) queue.push(node.right);
  }

  return root;
};
