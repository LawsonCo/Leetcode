class MyStack {
    constructor (data) {
        this.stack = [data]
    }
    pop() {
        return this.stack.pop()
    }
    push(data) {
        return this.stack.push(data)
    }
}

var myStack = new MyStack("First")
console.log(myStack)
myStack.push("Second")
console.log(myStack)
console.log(myStack.pop())
console.log(myStack)