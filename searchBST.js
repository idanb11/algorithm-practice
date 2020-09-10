const tree1 = require("binary-tree-printer");

const BinaryTreeNode = require("./interviewcake/binary-tree");

function searchBST(node, val) {
  if (!node) {
    return null;
  }

  if (val > node.value) {
    return searchBST(node.right, val);
  } else if (val < node.value) {
    return searchBST(node.left, val);
  } else {
    return node;
  }
}

const tree = new BinaryTreeNode(50);

const node17 = tree.insertLeft(17);
const node12 = node17.insertLeft(12);
node12.insertLeft(9);
node12.insertRight(14);
node17.insertRight(23);
const node72 = tree.insertRight(72);
node72.insertLeft(56);
node72.insertRight(76);


console.log(tree1.printAsciiTree(tree));


console.log(searchBST(tree, 14));

