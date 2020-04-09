// Boundaries of a Binary Tree 
// Given a binary tree 
// Return an array of its boundary values
// All top, all left, all bottom, all right

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var boundaryOfBinaryTreeRecursive = function(root, takeAllLeft, partitionAllRight, resultArray, rightPartition) {
    if (root == null || root.val == null) {
        return
    }
    // Leaf case
    if ((root.left == null || root.left.val == null) && (root.right == null || root.right.val == null) ) {
        resultArray.push(root.val)
        return 
    }
    // Left edge
    if (takeAllLeft) {
        resultArray.push(root.val)
    }
    // Right edge
    if (partitionAllRight) {
        rightPartition.push(root.val)
    }
    if (root.left == null) {
        boundaryOfBinaryTreeRecursive(root.right, takeAllLeft, partitionAllRight, resultArray, rightPartition)
        return 
    }
    if (root.right == null) {
        boundaryOfBinaryTreeRecursive(root.left, takeAllLeft, partitionAllRight, resultArray, rightPartition)
        return 
    }
    boundaryOfBinaryTreeRecursive(root.left, takeAllLeft, false, resultArray, rightPartition)
    boundaryOfBinaryTreeRecursive(root.right, false, partitionAllRight, resultArray, rightPartition)
};

var boundaryOfBinaryTree = function(root) {
    if (root == null || root.val == null) {
        return []
    }
    let resultArray = [root.val]
    let rightPartition = []
    boundaryOfBinaryTreeRecursive(root.left, true, false, resultArray, rightPartition)
    boundaryOfBinaryTreeRecursive(root.right, false, true, resultArray, rightPartition)
    rightPartition.reverse()
    resultArray = resultArray.concat(rightPartition)
    return resultArray
};

let TreeNode_1 = new TreeNode(9)
let TreeNode_2 = new TreeNode(6)
let TreeNode_3 = new TreeNode(20)
let TreeNode_4 = new TreeNode(15)
let TreeNode_5 = new TreeNode(30)
let TreeNode_6 = new TreeNode(2)
let TreeNode_7 = new TreeNode(7)
TreeNode_1.right = TreeNode_2
TreeNode_1.left = TreeNode_3
TreeNode_2.left = TreeNode_4
TreeNode_2.right = TreeNode_5
TreeNode_3.left = TreeNode_6
TreeNode_3.right = TreeNode_7
TreeNode_5.right = new TreeNode(100)
TreeNode_5.right.left = new TreeNode(null)
TreeNode_5.right.right = new TreeNode(null)
console.log(TreeNode_1)

console.log(boundaryOfBinaryTree(TreeNode_1))