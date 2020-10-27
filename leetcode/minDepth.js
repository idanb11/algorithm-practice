const tree1 = require("binary-tree-printer");

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
const minDepth = function (root) {
  if (!root) {
    return 0;
  }

  const depth = 1;
  const nodes = [[root, depth]];

  while (nodes.length) {
    const [node, depth] = nodes.shift();

    if (!node.right && !node.left) {
      return depth;
    }

    if (node.left) {
      nodes.push([node.left, depth + 1]);
    }

    if (node.right) {
      nodes.push([node.right, depth + 1]);
    }
  }
};


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

const tree = new BinaryTreeNode(50);
const node30 = tree.insertLeft(30);
const node80 = tree.insertRight(80);

node30.insertLeft(20);
node30.insertRight(60);
// node80.insertLeft(70);
// node80.insertRight(90);

console.log(tree1.printAsciiTree(tree, {valueName: "val"}));


console.log(minDepth(tree));
