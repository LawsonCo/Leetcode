// This is the native ES6 set implementation. Here are some experiments
let mySet = new Set([1, 2, 3, 4])
console.log(mySet.add(5))
console.log(mySet.add(5))
console.log(mySet)
console.log(mySet.has(5))
console.log(mySet.delete(5))
console.log(mySet.delete(5))
console.log(mySet.has(5))
console.log(mySet.values())

// Iterate over set values
mySet.forEach(function(x) {
    console.log(x)
})