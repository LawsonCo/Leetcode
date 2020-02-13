/**
 * Max Depth Binary Tree
 * 
 * Given a binary tree, find the maximum depth from the root to a leaf 
 * Tree is not balanced. 
 * 
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


var maxDepth = function(root) {
    if (root) {
        return 1+Math.max(maxDepth(root.left),maxDepth(root.right))
    }
    return 0
};