class Node { 
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }
    enQ(val) {
        let newNode = new Node(val)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = this.tail.next
        }
    }
    deQ() {
        if (this.head == null) {
            return null
        } else {
            let ret = this.head
            this.head = this.head.next
            if (this.head == null) {
                this.tail = null
            }
            return ret.val
        }
    }
}

let Q = new Queue()
console.log(Q)
Q.enQ(1)
Q.enQ(2)
Q.enQ(3)
Q.enQ(4)

console.log(Q)
console.log(Q.deQ())
console.log(Q)
console.log(Q.deQ())
console.log(Q)
console.log(Q.deQ())
console.log(Q)
console.log(Q.deQ())
console.log(Q)