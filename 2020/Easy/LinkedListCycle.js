/**
 * LinkedList Cycle
 * 
 * Given a LinkedList, determine if it has a cycle 
 * Return the earlier index of the cycle
 * Given: 3 -> 2 -> 0 -> 4 -> 2
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create a map of values to an array of nodes 
// When value seen, iterate over the array and see if node seen before 
// If yes, return it. If no, store it
var hasCycle = function(head) {
    // Cover base case
    if (head == null) {
        return false
    }

    // Initialize nodes map
    nodesMap = {}
    nodesMap[head.val] = [head]
    head = head.next

    // Iterate over the list 
    // Populate nodes map 
    // When a match found, return it 
    while (head != null) {
        let nodesForVal = nodesMap[head.val]
        if (nodesForVal) {
            for (let i = 0; i < nodesForVal.length; i++) {
                if (nodesForVal[i] == head) {
                    return true
                }
            }
            nodesForVal.push(head)
        } else {
            nodesMap[head.val] = [head]
        }
        head = head.next
    }
    return false
};

// Write a complex case where 2 nodes have the same value. A list can have multiple els with the same val
let node0 = new ListNode(1)
let node1 = new ListNode(2)
let node2 = new ListNode(3)
let node3 = new ListNode(4)
let node4  = new ListNode(2)
let node5 = new ListNode(5)
node2.next = node4
node2.next = node3
node1.next = node2
node0.next = node1
node3.next = node4
node4.next = node5
node5.next = node1

//console.log(node0)
//console.log(node0.next)
//console.log(node0.next.next)
//console.log(node0.next.next.next)
//console.log(node0.next.next.next.next)
//console.log(node0.next.next.next.next.next)
console.log(hasCycle(node0))