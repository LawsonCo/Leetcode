// Given a binary search tree where 2 nodes have been swapped 
// Fix it 

function Node(val) {
    this.val = val;
    this.left = this.right = null;
}

class recoverTreeState {
    constructor (pred, x, y) {
        this.pred = pred
        this.x = x
        this.y = y
    }
}

// First write a swap helper 
function swap(node_1, node_2) {
    let temp = node_1.val
    node_1.val = node_2.val
    node_2.val = temp
}


var recoverTree = function(root) {
    let prev = new Node(0)
    let firstOutOfOrder = false
    let helper = function(root) {
        if (root == null) {
            return
        }
        helper(root.left)
        console.log("Root: " + root.val + " prev: " + prev.val)
        if (root.val < prev.val) {
            console.log("Found out of order: " + prev.val)
            if (firstOutOfOrder) {
                console.log("Swapping: " + firstOutOfOrder.val + " and " + prev.val)
                swap(firstOutOfOrder, prev)
            } else {
                console.log("Setting")
                firstOutOfOrder = prev
            }
        }
        prev = root
        helper(root.right)
    }
    helper(root)
};

/*
let node_1 = new Node(2)
let node_2 = new Node(1)
let node_3 = new Node(4)
let node_4 = new Node(3)

node_3.left = node_4
node_1.left = node_2
node_1.right = node_3

console.log(node_1)
swap(null, node_1, node_3, node_4)
console.log(node_4)
*/

let node_1 = new Node(9)
let node_2 = new Node(6)
let node_3 = new Node(20)
let node_4 = new Node(15)
let node_5 = new Node(30)
let node_6 = new Node(2)
let node_7 = new Node(7)
node_1.right = node_2
node_1.left = node_3
node_2.left = node_4
node_2.right = node_5
node_3.left = node_6
node_3.right = node_7
/*
console.log(node_1)
swap(node_2, node_3)
console.log(node_1)
*/
console.log(node_1)
recoverTree(node_1)
console.log(node_1)