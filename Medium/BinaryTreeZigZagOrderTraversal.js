// Given a binary tree 
// Return a ZigZag order traversal of the tree 

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var zigzagLevelOrderRecursive = function(root, values, level) {
    if (root == null) {
        return values
    }
    if (values[level] != undefined) {
        if  (level % 2 == 0) {
            values[level].push(root.val)
        } else {
            values[level] = [root.val].concat(values[level])
        }
    } else {
        values[level] = [root.val]
    }
    zigzagLevelOrderRecursive(root.left, values, level+1)
    zigzagLevelOrderRecursive(root.right, values, level+1)
    return values
};


var zigzagLevelOrder = function(root) {
    return zigzagLevelOrderRecursive(root, [], 0)
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
// TreeNode_1.val = null
console.log(TreeNode_1)

console.log(zigzagLevelOrder(TreeNode_1))