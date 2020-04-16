class NodeWrapper {
    constructor (node, index) {
        this.node = node
        this.index = index
    }
}

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

var copyRandomList = function(head) {
    if (head == null) {
        return null
    }
    let originalHead = head
    let oldToNewMap = new Map()
    // Initialize new head, and map of old nodes to new nodes
    let new_head = new Node(head.val, head.next, null)
    let newHeadOriginal = new_head
    oldToNewMap.set(head, new_head)
    head = head.next
    while (head != null) {
        new_head.next = new Node(head.val, head.next, null)
        new_head = new_head.next
        oldToNewMap.set(head, new_head)
        head = head.next
    }
    new_head = newHeadOriginal
    while (originalHead != null) {
        new_head.random = oldToNewMap.get(originalHead.random)
        new_head = new_head.next
        originalHead = originalHead.next
    }
    return newHeadOriginal
};

let n1 = new Node(7, null, null)
let n2 = new Node(13, null, null)
let n3 = new Node(11, null, null)
let n4 = new Node(10, null, null)
let n5 = new Node(1, null, null)
n1.next = n2
n2.next = n3
n2.random = n1
n3.next = n4
n3.random = n5
n4.next = n5
n4.random = n3
n5.next = null

console.log(copyRandomList(n1))