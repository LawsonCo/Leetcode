class MyQueue {
    constructor(data) {
        this.queue = [data]
    }
    enqueue (data) {
        this.queue.push(data)
    }
    dequeue () {
        return this.queue.shift()
    }
}

myQueue = new MyQueue("first")
console.log(myQueue)
myQueue.enqueue("second")
console.log(myQueue)
console.log(myQueue.dequeue())
console.log(myQueue)