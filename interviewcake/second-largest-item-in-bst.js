const tree1 = require("binary-tree-printer");
const BinaryTreeNode = require("./binary-tree");


function secondLargestItemInBst(tree) {
  const nodes = [];
  nodes.push({node: tree, parent: null});
  let didFindMax = false;

  while (nodes.length) {
    const {node, parent} = nodes.pop();

    if (node.right) {
      nodes.push({node: node.right, parent: node});
    } else {
      if (!node.left) {
        return didFindMax ? node.value : parent.value;
      } else {
        didFindMax = true;
        nodes.push({node: node.left, parent: node});
      }
    }
  }
}

const tree = new BinaryTreeNode(100);

// const node150 = tree.insertRight(150);
// const node125 = node150.insertLeft(125);
// const node130 = node125.insertRight(130);
// const node131 = node130.insertRight(131);
// const node124 = node125.insertLeft(124);

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


console.log(tree1.printAsciiTree(tree));


console.log(secondLargestItemInBst(tree));
