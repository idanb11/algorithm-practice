const tree1 = require("binary-tree-printer");

const BinaryTreeNode = require("./binary-tree");

function balancedBinaryTree(tree) {
  const depths = [];
  const nodes = [];

  nodes.push([tree, 0]);

  while (nodes.length) {
    const nodePair = nodes.pop();
    const node = nodePair[0];
    const currentDepth = nodePair[1];

    if (!node.left && !node.right) {
      if (depths.indexOf(currentDepth) === -1) {
        depths.push(currentDepth);

        if (depths.length > 2) {
          return false;
        }

        if (Math.abs(depths[0] - depths[1]) > 1) {
          return false;
        }
      }
    } else {
      if (node.left) {
        nodes.push([node.left, currentDepth + 1]);
      }
      
      if (node.right) {
        nodes.push([node.right, currentDepth + 1]);
      }
    }
  }
  return true;
}

const tree = new BinaryTreeNode(50);

const node17 = tree.insertLeft(17);
const node12 = node17.insertLeft(12);
node12.insertLeft(9);
node12.insertRight(14);
node17.insertRight(23);
// .insertLeft(12).insertRight(23);
const node72 = tree.insertRight(72);
const node54 = node72.insertLeft(54);
// const node76 = node72.insertRight(76);
// const node67 = node54.insertRight(67).insertRight(76).insertRight(76).insertRight(76);

// const node30 = tree.insertLeft(30);
// const node80 = tree.insertRight(80);

// node30.insertLeft(20);
// node30.insertRight(60);
// node80.insertLeft(70);
// node80.insertRight(90);

// console.log(tree);

console.log(tree1.printAsciiTree(tree));

console.log(balancedBinaryTree(tree));
