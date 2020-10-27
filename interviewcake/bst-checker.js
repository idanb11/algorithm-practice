const tree1 = require("binary-tree-printer");

const BinaryTreeNode = require("./binary-tree");

const tree = new BinaryTreeNode(50);

const node30 = tree.insertLeft(30);
const node80 = tree.insertRight(80);

node30.insertLeft(20);
node30.insertRight(45);
node80.insertLeft(70);
node80.insertRight(90);

console.log(tree1.printAsciiTree(tree));

function bstChecker(root) {
  if (!root) {
    return;
  }

  const range = [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
  return recurse(root, range);
  // const nodes = [[root, range]];

  // while (nodes.length) {
  //   const [node, range] = nodes.shift();

  //   if (node.value > range[0] && node.value < range[1]) {
  //     if (node.left) {
  //       nodes.push([node.left, [range[0], node.value]]);
  //     }

  //     if (node.right) {
  //       nodes.push([node.right, [node.value, range[1]]]);
  //     }
  //   } else {
  //     return false;
  //   }
  // }

  // return true;
}

function recurse(node, range) {
  if (!node) return true;

  if (node.value < range[0] || node.value > range[1]) {
    return false;
  }

  return recurse(node.left, [range[0], node.value]) && recurse(node.right, [node.value, range[1]])

  // if (node.left) {
  //   return recurse(node.left, [range[0], node.value]);
  // }

  // if (node.right) {
  //   return recurse(node.right, [node.value, range[1]]);
  // }
}

console.log(bstChecker(tree));
