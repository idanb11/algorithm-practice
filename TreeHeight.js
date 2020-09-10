const tree1 = require("binary-tree-printer");

const BinaryTreeNode = require("./interviewcake/binary-tree");

function solution(T) {
  const queue = [];
  let maxDepth = 0;

  if (!T) {
    return -1;
  }

  queue.push([T, 0]);

  while (queue.length) {
    const nodePair = queue.pop();
    const node = nodePair[0];
    const currentDepth = nodePair[1];

    if (!node.l && !node.r) {
      maxDepth = Math.max(maxDepth, currentDepth);
    }

    if (node.l) {
      queue.push([node.l, currentDepth + 1]);
    }

    if (node.r) {
      queue.push([node.r, currentDepth + 1]);
    }
  }

  return maxDepth;
}
const tree = new BinaryTreeNode(50);

const node17 = tree.insertLeft(17);
const node12 = node17.insertLeft(12);
node12.insertLeft(9);
node12.insertRight(14);
node17.insertRight(23);
const node72 = tree.insertRight(72);
const node54 = node72.insertLeft(54);
const node67 = node54.insertRight(67).insertRight(76).insertRight(76).insertRight(76);
node67.insertLeft(44);

console.log(tree1.printAsciiTree(tree));

console.log(solution(tree));
