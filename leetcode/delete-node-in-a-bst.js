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
 * @param {number} key
 * @return {TreeNode}
 */

const treePrint = require("binary-tree-printer");

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
const deleteNode = function (root, key) {
  let parentNode = null;
  let direction = 'right';
  let isFound = false;
  let node;
  const nodes = [root];

  while (nodes.length) {
    node = nodes.pop();
    if (node && key > node.value) {
      parentNode = node;
      direction = "right";
      nodes.push(node.right);
    } else if (node && key < node.value) {
      parentNode = node;
      direction = "left";
      nodes.push(node.left);
    } else if (node && node.value === key) {
      isFound = true;
      break;
    }
  }

  if (!isFound) {
    return tree1;
  }

  if (node && !node.right && !node.left) {
    parentNode[direction] = null;
  } else if (node && !node.right && node.left) {
    parentNode[direction] = node.left;
  } else if (node && node.right && !node.left) {
    parentNode[direction] = node.right;
  } else if (node) {
    if (node.right) {
      const rightNode = node.right;
      parentNode[direction] = node.left;
      node.left.right = rightNode;
    } else {
      const leftNode = node.left;
      parentNode[direction] = node.right;
      node.left.right = leftNode;
    }
  }

  return root;
};

const tree1 = new BinaryTreeNode(50);
const node30 = tree1.insertLeft(30);
const node80 = tree1.insertRight(80);

node30.insertLeft(20);
node30.insertRight(45);
node80.insertLeft(70);
node80.insertRight(90);

const tree2 = new BinaryTreeNode(70);
const node60 = tree2.insertLeft(60);
const node100 = tree2.insertRight(100);

node60.insertLeft(50);
node60.insertRight(65);
node100.insertLeft(95);
node100.insertRight(110);

console.log(treePrint.printAsciiTree(tree1));
// console.log(treePrint.printAsciiTree(tree2));

console.log(treePrint.printAsciiTree(deleteNode(tree1, 50)));
