function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function logLinkedList(list) {
    while (list != null) {
        console.log(list.val)
        list = list.next
    }
}

function buildLLFromArray(array) {
    let head = new ListNode(array[0], null);
    let next = head
    for (i=1; i < array.length; i++) {
        next.next = new ListNode(array[i])
        next = next.next
    }
    return head
}

/*
A linked list of length n is given such that each node contains an additional random pointer, which could 
point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each 
new node has its value set to the value of its corresponding original node. Both the next and random 
pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original 
list and copied list represent the same list state. None of the pointers in the new list should point to nodes
in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then 
for the corresponding two nodes x and y in the 
copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of 
[val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does 
not point to any node.
Your code will only be given the head of the original linked list.
*/

function hashNode(node) {
    let hash = 
}

var copyRandomList = function(head) {
    let nodeMap = {}

};

/*
Sol: 
Iterate over list once, copy node, copy next, and copy random pointer

Hash all random pointers so we know where they point. When getting next, check if its been created

Sol works! Using the Map class in JS handles building the hash for me (where I got stuck)
*/