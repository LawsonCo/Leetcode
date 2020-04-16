// Maximum Average Subtree 
// Given a binary tree
// Find the maximum average value of any subtree (in number form)

function Node(val) {
        this.val = val;
        this.left = this.right = null;

}

class MaxSubtree {
    constructor(nodes, max) {
        this.numNodes = nodes
        this.max = max
    }
}

function recursiveAvSubtree(root) {
    if (root == null || root.val == null) {
        return new MaxSubtree([], 0)
    }
    let left = recursiveAvSubtree(root.left)
    console.log(left)
    let right = recursiveAvSubtree(root.right)
    console.log(right)
    t.nodes[i]
    let currMax = (left.numNodes+right.numNodes+root.val)/(left.nodes.length+right.nodes.length+1)
    return new MaxSubtree(left.numNodes + right.numNodes + 1, Math.max(left.max, right.max, currMax))
}

var maximumAverageSubtree = function(root) {
    let sol = recursiveAvSubtree(root)
    console.log(sol)
    return sol.max
};

let node1 = new Node(2)
let node2 = new Node(null)
let node3 = new Node(1)
node1.left = node2
node1.right = node3

console.log(node1)
console.log(node1.left)
console.log(maximumAverageSubtree(node1))

console.log([].concat([]))