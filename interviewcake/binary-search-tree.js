const tree1 = require("binary-tree-printer");

const BinaryTreeNode = require("./binary-tree");

function binarySearchTree(tree) {
  const nodes = [];
  const rootValue = tree.value;
  nodes.push(tree);

  while (nodes.length) {
    const node = nodes.pop();
    const value = node.value;

    if (node.left) {
      if (node.left.value >= value || node.left.value >= rootValue) {
        return false;
      }
      nodes.push(node.left);
    }

    if (node.right) {
      if (node.right.value <= value || node.right.value <= rootValue) {
        return false;
      }
      nodes.push(node.right);
    }
  }

  return true;
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

console.log(tree);

console.log(tree1.printAsciiTree(tree));

console.log(binarySearchTree(tree));

