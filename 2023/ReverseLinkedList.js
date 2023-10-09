/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


// Valid sol with O(N) memory (bad)
var reverseList = function(head) {
    let newHead = new ListNode(head.val, null);
    head = head.next
    while (head != null) {
        newHead = new ListNode(head.val, newHead)
        head = head.next
    }   
    return newHead 
};

console.log(new ListNode("1", null))

var reverseListInPlace = function(head) {
    if (head == null || head == undefined || head.next == null || head.next == undefined ) {
        return head 
    }
    // We need to maintain 3 nodes always
    // Left, current, and next
    // Point Current to Left, make current new left, make next new current, make next.next new next

    let left = head
    let current = head.next
    let right = head.next.next
    head.next = null
    while (right != null) {
        let newNext = right.next
        current.next = left
        left = current
        current = right
        right = newNext
    }   
    current.next = left
    return current 
};