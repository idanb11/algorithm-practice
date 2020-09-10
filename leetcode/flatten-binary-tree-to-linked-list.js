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
 * @return {void} Do not return anything, modify root in-place instead.
 */

const tree1 = require("binary-tree-printer");

function TreeNode(val, left, right) {
  this.value = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function flatten(root) {
  const nodes = [];

  nodes.push(root);

  while (nodes.length) {
    const currentNode = nodes.pop();

    console.log(currentNode.value);

    if (currentNode.right) {
      nodes.push(currentNode.right);
    }

    if (currentNode.left) {
      currentNode.right = currentNode.left;
      nodes.push(currentNode.left);
    }

    currentNode.right = currentNode;
  }

  console.log(tree1.printAsciiTree(root));
}

const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
node1.left = node2;
node1.right = node5;
node2.left = node3;
node2.right = node4;
node5.right = node6;

console.log(tree1.printAsciiTree(node1));

flatten(node1);
