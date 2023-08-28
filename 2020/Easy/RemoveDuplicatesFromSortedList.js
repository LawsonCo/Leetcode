// Remove Duplicates From Sorted List
// Given a sorted linked list 
// Remove duplicates 

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var deleteDuplicates = function(head) {
    if (head == null) {
        return null
    }
    let original_head = head
    let last = head
    head = head.next
    while (head != null) {
        console.log(head)
        if (head.val == last.val) {
            last.next = head.next
        }
        last = head 
        head = head.next
    }
    return original_head 
};

let node_1 = new ListNode(1)
let node_1_2 = new ListNode(1)
let node_2 = new ListNode(1)
let node_3 = new ListNode(3)
let node_3_2 = new ListNode(3)
node_1.next = node_1_2
node_1_2.next = node_2
console.log(node_1)
console.log(deleteDuplicates(node_1))