/**
 * Invert a Binary Tree
 * 
 * Given a binary tree 
 * Flip the children of every node from the root downwards
 * (Sort of cheating here by breaking this down into logic rather than the picture, but it's really hard to draw)
 */

var invertTree = function(root) {
    if (root != null) {
        let temp = invertTree(root.right)
        let temp2 = invertTree(root.left)
        root.left = temp
        root.right = temp2
    }
    return root
};

class TreeNode { 
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

let my_tree = new TreeNode(10)
my_tree.left = new TreeNode(4)
my_tree.right = new TreeNode(2)

//console.log(my_tree)
console.log(invertTree(my_tree))