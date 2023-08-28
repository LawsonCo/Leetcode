/**
 * Reverse a Linked List
 * 
 * Given a LinkedList in the form of a head node 
 * Return it reversed in the form of a head node 
 * 
 * Input: 1 -> 2 -> 3 -> Null 
 * Output: 3 -> 2 -> 1 -> Null
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseList = function(head) {
    // Initialize base cases
    // Return null if no head, return head if no next
    if (head == null) {
        return null
    }
    if (head.next == null) {
        return head
    }
    // Initialize next variable and set head.next to null
    let next = head.next
    head.next = null
    // Iterate over nodes 
    // At each loop, set next.next = head,
    // Then set new head to next, and new next to next.next
    // Return if head or head.next are null
    while (head != null) {
        if (next == null) {
            return head
        }
        let next_next = next.next
        next.next = head
        head = next
        next = next_next
    }
    return head
};

let node1 = new ListNode(1)
let node2 = new ListNode(2)
let node3 = new ListNode(3)
let node4 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4

console.log(node1)
console.log(reverseList(node1).next)