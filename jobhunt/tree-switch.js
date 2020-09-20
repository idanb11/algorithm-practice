const tree1 = require("binary-tree-printer");

const BinaryTreeNode = require("../interviewcake/binary-tree");

function treeSwitch(tree) {
  const nodes = [];
  nodes.push(tree);

  while (nodes.length) {
    const node = nodes.shift();

    const left = node.left;
    const right = node.right;

    node.left = right;
    node.right = left;

    if (node.left) {
      nodes.push(node.left);
    }

    if (node.right) {
      nodes.push(node.right);
    }
  }
  return tree;
}

const tree = new BinaryTreeNode(50);
const node30 = tree.insertLeft(30);
const node80 = tree.insertRight(80);

node30.insertLeft(20);
node30.insertRight(60);
node80.insertLeft(70);
node80.insertRight(90);

console.log(tree1.printAsciiTree(tree));
treeSwitch(tree);
console.log(tree1.printAsciiTree(tree));
