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