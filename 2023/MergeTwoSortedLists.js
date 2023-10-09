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

let ll = buildLLFromArray([1,2,3,4,5])
logLinkedList(ll)


/**
You are given the heads of two sorted 
linked lists list1 and list2.

Merge the two lists into one sorted list. 
The list should be made by splicing together 
the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
 */
var mergeTwoLists = function(list1, list2) {
    // Base cases
    if (list1 == null || list1.next == null) {
        return list2
    }
    if (list2 == null || list2.next == null) {
        return list1
    }
    
    // Define new head
    let head = null
    if (list2.val < list1.val) {
        head = list2
        list2 = list2.next
    } else {
        head = list1
        list1 = list1.next
    }

    // Build LL
    let currHead = head
    while (list1 != null && list2 != null) {
        if (list2.val < list1.val) {
            currHead.next = list2
            currHead = currHead.next
            list2 = list2.next
        } else {
            currHead.next = list1
            currHead = currHead.next
            list1 = list1.next
        }
    }
    
    // Take remainder L1
    while (list1 != null) {
        currHead.next = list1
        currHead = currHead.next
        list1 = list1.next
    }

    // Take remainder L2
    while (list2 != null) {
        currHead.next = list2
        currHead = currHead.next
        list2 = list2.next
    }

    // Return head
    return head;
};