/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

const treePrint = require("binary-tree-printer");

const BinaryTreeNode = require("../interviewcake/binary-tree");

// function getAllElements(root1, root2) {
//   const nodes = [];

//   if (!root1 && !root2) {
//     return;
//   }

//   nodes.push({node1: root1, node2: root2});

//   while (nodes.length) {
//     const {node1, node2} = nodes.pop();

//     if (node1.value <= node2.value) {

//     }
//   }

//   // inOrder(root1, root2);
// }

function getAllElements(root1, root2) {
  const current1 = fetchValues(root1);
  const current2 = fetchValues(root2);

  return mergeTwo(current1, current2);
}

function fetchValues(root) {
  const stack = [];
  const result = [];
  let current = root;

  while (current || stack.length) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      const temp = stack.pop();
      result.push(temp.value);
      current = temp.right;
    }
  }

  return result;
}

function mergeTwo(arr1, arr2) {
  const result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
}

// function inOrder(node1, node2) {
//   if (node1 !== null && node2 !== null) {
//     if (node1.value <= node2.value) {
//       inOrder(node1.left, node2);
//       console.log(node1.value);
//       if (node1.right && node1.right.value < node2.value) {
//         inOrder(node1.right, node2);
//       } else {
//         inOrder(node1, node2.left);
//       }
//     } else {
//       inOrder(node1, node2.left);
//       console.log(node2.value);

//       if (node1.right && node1.right.value < node2.value) {
//         inOrder(node1, node2.left);
//       } else {
//         inOrder(node1.right, node2);
//       }
//     }
//   }
// }

const tree1 = new BinaryTreeNode(50);
const node30 = tree1.insertLeft(30);
const node80 = tree1.insertRight(80);

node30.insertLeft(20);
node30.insertRight(60);
node80.insertLeft(70);
node80.insertRight(90);

const tree2 = new BinaryTreeNode(70);
const node60 = tree2.insertLeft(60);
const node100 = tree2.insertRight(100);

node60.insertLeft(50);
node60.insertRight(65);
node100.insertLeft(95);
node100.insertRight(110);

console.log(treePrint.printAsciiTree(tree1));
console.log(treePrint.printAsciiTree(tree2));

console.log(getAllElements(tree1, tree2));
