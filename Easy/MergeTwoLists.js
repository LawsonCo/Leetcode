function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function(l1, l2) {
    // Check base cases
    if (l1 == null) {
        return l2
    }
    if (l2 == null) {
        return l1
    }
    // Initialize head 
    let head = null
    if (l1.val < l2.val) {
        head = l1
        l1 = l1.next
    }
    else {
        head = l2
        l2 = l2.next
    }
    let originalHead = head

    // Merge!
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            head.next = l1
            l1 = l1.next
            head = head.next
        }
        else {
            head.next = l2
            l2 = l2.next
            head = head.next
        }
    }
    if (l1 != null) {
        head.next = l1
    }
    if (l2 != null) {
        head.next = l2
    }
    return originalHead
};