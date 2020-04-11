function ListNode(val) {
    this.val = val;
    this.next = null;
}

function mergeLists (list_a, list_b) {
    let head = new ListNode(0)
    let original_head = head
    while (list_a != null && list_b != null) {
        if (list_a.val < list_b.val) {
            // Do this to save on memory 
            // To move a node to the new list 
            // Save list_a.next
            // Set list_a.next to null 
            // Move over list_a (Now just a single node)
            // Set new list_a to be temp (old list_a.next)
            let temp = list_a.next
            list_a.next = null
            head.next = list_a
            list_a = temp
            head = head.next
        } else {
            let temp = list_b.next
            list_b.next = null
            head.next = list_b
            list_b = temp
            head = head.next
        }
    }
    if (list_a != null) {
        head.next = list_a
    }
    if (list_b != null) {
        head.next = list_b
    }
    return original_head.next
}

// Recurse in O(logn) pattern
var mergeKListsRecursively = function(lists, start, end) {
    console.log("Merging lists between start: " + start + " and end: " + end)
    if (start == end-1) {
        return lists[start]
    }
    let mid = Math.floor((start+end)/2)
    let left = mergeKListsRecursively(lists, start, mid)
    let right = mergeKListsRecursively(lists, mid, end)
    return mergeLists(left, right)
};

var mergeKLists = function(lists) {
    if (lists.length == 0) {
        return null
    }
    if (lists.length == 1) {
        return lists[0]
    }
    return mergeKListsRecursively(lists, 0, lists.length)
};


let lists = [node_1, node_2]
let res = mergeKLists([null])
console.log(res)
//console.log(res.next.next)
//console.log(res.next.next.next)


let node_1 = new ListNode(1)
let node_2 = new ListNode(2)
let node_3 = new ListNode(3)

let node_4 = new ListNode(4)
let node_5 = new ListNode(5)
let node_6 = new ListNode(6)

node_1.next = node_3
node_3.next = node_6

node_2.next = node_4
node_4.next = node_5

//console.log(node_1)
//console.log(node_2)

//let res = mergeLists(node_1, node_2)
//console.log(res)
//console.log(res.next.next)
//console.log(res.next.next.next)
