/** 
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var MinStack = function() {
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    
};

// HLD
// Stack is implemented with a LinkedList -> O(1) push, pop, top 
// Stack has a secondary Heap Structure for Min item retrieval 
// -> Min item retrieval is O(1) but putting an item into the heap is O(LogN)
// ----> This would make push O(LogN) technically 

// Trick: Because Stack is LIFO, we only ever remove top item. Each item can be a tuple containing
// itself and the minimum item. When we push an item, compare to the previous min and decide if this or that
// is the new min 