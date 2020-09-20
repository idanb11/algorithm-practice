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
const convertBST = function (root) {
  let sum = 0;

  recurse(root);

  function recurse(node) {
    if (root !== null) {
      recurse(node.right);
      sum += node.val;
      node.val = sum;
      recurse(node.left);
    }
    return node;
  }
};
