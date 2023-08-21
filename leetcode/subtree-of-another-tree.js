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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const isSameTree = function (p, q) {
  if (!p && !q) return true;
  const queue = [[p, q]];

  while (queue.length) {
    const [tree1, tree2] = queue.pop();

    if (tree1 && tree2 && tree1.val === tree2.val) {
      if (tree1.left || tree2.left) {
        queue.push([tree1.left, tree2.left]);
      }

      if (tree1.right || tree2.right) {
        queue.push([tree1.right, tree2.right]);
      }
    } else {
      return false;
    }
  }

  return true;
};

const isSubtree = function (root, subRoot) {
  const queue = [root];
  let comparingRootNode = root;
  let isFound = false;

  while (queue.length) {
    const node = queue.pop();

    if (node.val === subRoot.val) {
      comparingRootNode = node;
      isFound = true;
      break;
    }
    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  if (isFound) {
    return isSameTree(comparingRootNode, subRoot);
  } else {
    return isFound;
  }
};

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n5 = new TreeNode(5);
const n4 = new TreeNode(4, n1, n2);
const n3Root = new TreeNode(3, n4, n5);

const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));

console.log(isSubtree(n3Root, subRoot));
