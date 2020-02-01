class MyClass {
    constructor (x, y) {
        this.x = x
        this.y = y
    }
    describe() {
        console.log("I am a class, my x values is " + this.x + " and my y value is " + this.y)
    }
}

var myObject = new MyClass(6, 8)
myObject.describe()
