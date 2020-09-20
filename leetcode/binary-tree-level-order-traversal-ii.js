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
 * @return {number[][]}
 */

const tree1 = require("binary-tree-printer");

const levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }

  const queue = [];
  const results = [];

  queue.push([root, 0]);

  while (queue.length) {
    const [node, depth] = queue.shift();
    results[depth] ? results[depth].push(node.val) : (results[depth] = [node.val]);

    if (node.left) {
      queue.push([node.left, depth + 1]);
    }

    if (node.right) {
      queue.push([node.right, depth + 1]);
    }
  }
  return results.reverse();
};

class BinaryTreeNode {
  constructor(value) {
    this.val = value;
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

const tree = new BinaryTreeNode(50);

// const node17 = tree.insertLeft(17);
// const node12 = node17.insertLeft(12);
// node12.insertLeft(9);
// node12.insertRight(14);
// node17.insertRight(23)
// // .insertLeft(12).insertRight(23);
// const node72 = tree.insertRight(72);
// const node54 = node72.insertLeft(54);
// const node76 = node72.insertRight(76);
// node54.insertRight(67);
// .insertLeft(54).insertRight(76);

const node30 = tree.insertLeft(30);
const node80 = tree.insertRight(80);

node30.insertLeft(20);
node30.insertRight(60);
node80.insertLeft(70);
node80.insertRight(90);

console.log(tree1.printAsciiTree(tree));

levelOrderBottom(tree);
