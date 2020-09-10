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
 * @return {number[]}
 */

const tree1 = require("binary-tree-printer");

function inorderTraversal(root) {
  const nodes = [];
  nodes.push(root);
  const results = [];

  while (nodes.length) {
    const node = nodes.pop();
    // results.push(node.value);

    if (!node.left && !node.right) {
      results.push(node.value);
    }

    if (node.left) {
      nodes.push(node.left);
    }

    if (node.right) {
      // results.push(node.value);
      nodes.push(node.right);
    }
  }

  console.log(results);
  return results;
}

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

const tree = new BinaryTreeNode(1);
tree.insertRight(2).insertLeft(3);

console.log(tree1.printAsciiTree(tree));

console.log(inorderTraversal(tree));
