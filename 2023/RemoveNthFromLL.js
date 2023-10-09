/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/
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

var removeNthFromEnd = function(head, n) {
    if (head.next == null && n > 0) {
        return null
    }

    // Initialize first pointer 
    let secondPointer = head
    let i = n
    while (secondPointer != null && i > 0) {
        secondPointer = secondPointer.next
        i--
    }

    if (secondPointer == null) {
        return head.next
    }


    let firstPointer = head

    while (true) {
        secondPointer = secondPointer.next
        // Found the end!
        if (secondPointer == null) {
            firstPointer.next = firstPointer.next.next
            break
        }
        firstPointer = firstPointer.next
    }
    return head
};

let list = buildLLFromArray([1,2])
logLinkedList(removeNthFromEnd(list, 2))

/*
Sol: 
Have 2 pointers, one that lives N ahead of the first
*/