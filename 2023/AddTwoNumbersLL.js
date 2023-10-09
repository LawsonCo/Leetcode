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
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 
0 itself.
*/
var addTwoNumbers = function(l1, l2) {
    // Initialize Base Cases
    // An empty placeholder node
    let head = new ListNode(0, null)
    let headCopy = head
    let remainder = 0
    while (l1 != null && l2 != null) {
        let newVal = l1.val + l2.val + remainder

        if (newVal - 10 >= 0) {
            console.log("Case 1: " + remainder)
            remainder = 1
            newVal = newVal - 10
        } else {
            remainder = 0
        }

        headCopy.next = new ListNode(newVal, null)
        headCopy = headCopy.next

        l1 = l1.next
        l2 = l2.next
        console.log("Remainder: " + remainder)
    } 
    while (l1 != null) {
        let newVal = l1.val + remainder

        if (newVal - 10 >= 0) {
            remainder = 1
            newVal = newVal - 10
        } else {
            remainder = 0
        }

        headCopy.next = new ListNode(newVal, null)
        headCopy = headCopy.next

        l1 = l1.next
    }
    while (l2 != null) {
        let newVal = l2.val + remainder

        if (newVal - 10 == 0) {
            remainder = 1
            newVal = newVal - 10
        } else {
            remainder = 0
        }

        headCopy.next = new ListNode(newVal, null)
        headCopy = headCopy.next

        l2 = l2.next
    }

    if (remainder > 0) {
        headCopy.next = new ListNode(1, null)
        headCopy = headCopy.next
    }
    return head.next
};

logLinkedList(addTwoNumbers(buildLLFromArray([9,9,9,9,9,9,9]), buildLLFromArray([9,9,9,9])))