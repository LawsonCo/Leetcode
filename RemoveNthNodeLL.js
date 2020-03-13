/**
Given a linked list, remove the n-th node from the end of list and return its head. 
*/

function ListNode(val) {
     this.val = val;
     this.next = null;
}

var removeNthFromEnd = function(head, n) {
    if (head == null || n == 0) {
        return null
    }
    let originalHead = head
    let last = null
    while (head != null && n >= 0) {
        console.log(head)
        if (head.next == null)
        last = head
        head = head.next
        n--
    }
    console.log(n)
    console.log(last)
    console.log(head)
    if (n == 0 || last == null || head == null) {
        return last
    } else {
        last.next = head.next
        return originalHead
    }
};

let node = new ListNode(1)
let node2 = new ListNode(2)
node.next = node2
console.log(removeNthFromEnd(node, 1))