// Binary Search Tree Iterator 
// Should be able to consume a BST 
// When you call hasNext() - checks if there is a next 
// When you call next() - returns the next in order successor


// Push all left side on to stack 
// When popped, return this one, and then push all left of right child on to stack 
// O(height) memory (and initial processing)
class BSTIterator {
    constructor(root) {
        if (root == null) {
            this.stack = []
            return
        }
        this.stack = [root]
        this.pushLeftChildren(root.left)
    }
    pushLeftChildren(root) {
        while (root != null) {
            this.stack.push(root)
            root = root.left
        }
    }
    next() {
        if (this.stack.length == 0) {
            return false
        }
        let curr = this.stack.pop()
        this.pushLeftChildren(curr.right)
        return curr.val
    }
    hasNext() {
        return this.stack.length != 0
    }
};

BSTIterator.prototype.next = function() {
    
};
 
BSTIterator.prototype.hasNext = function() {
    
};