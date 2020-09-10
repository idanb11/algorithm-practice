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
 * @return {number}
 */

const tree1 = require("binary-tree-printer");

const BinaryTreeNode = require("../interviewcake/binary-tree");

function deepestLeavesSum(root) {
  const queue = [];
  let lastLevel = 0;
  let levelSum = 0;
  queue.push([root, lastLevel]);


  while (queue.length) {
    const nodePair = queue.shift();
    const node = nodePair[0];
    const level = nodePair[1];

    if (level > lastLevel) {
      levelSum = 0;
      lastLevel = level;
    }

    if (!node.left && !node.right) {
      levelSum += node.value;
    }

    if (node.left) {
      queue.push([node.left, level + 1]);
    }

    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }

  return levelSum;
}

const tree = new BinaryTreeNode(50);

const node17 = tree.insertLeft(17);
const node12 = node17.insertLeft(12);
node12.insertLeft(9);
node12.insertRight(14);
node17.insertRight(23)
// .insertLeft(12).insertRight(23);
const node72 = tree.insertRight(72);
const node54 = node72.insertLeft(54);
const node76 = node72.insertRight(76);
node54.insertRight(67);
// .insertLeft(54).insertRight(76);

// const node30 = tree.insertLeft(30);
// const node80 = tree.insertRight(80);

// node30.insertLeft(20);
// node30.insertRight(60);
// node80.insertLeft(70);
// node80.insertRight(90);

console.log(tree1.printAsciiTree(tree));

console.log(deepestLeavesSum(tree));
