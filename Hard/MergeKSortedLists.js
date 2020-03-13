/**
 * Merge k sorted lists 
 * 
 * Given k sorted linked lists, merge them 
 */


/**
 * Idea: Iterate over the lists and throw them into merge2
 * Works! Can we do better?
 * Yes, see below
 * 
 */

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

// Merge every 2, then recurse and merge every 2. End up doing log(k) merges instead of k merges
// O(nlogk)
// where n is the number of nodes, and k is the number of lists
var mergeKLists = function(lists) {
    if (lists.length == 0){
        return null
    }
    if (lists.length == 1) {
        return lists[0]
    }
    let mergedLists = []
    let i = 0
    while (i < lists.length - 1) {
        mergedLists.push(mergeTwoLists(lists[i], lists[i+1]))
        i+=2
    }
    if (lists.length % 2 != 0) {
        mergedLists.push(lists[lists.length - 1])
    }
    return mergeKLists(mergedLists)
};