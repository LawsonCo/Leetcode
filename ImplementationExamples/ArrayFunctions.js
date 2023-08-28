// splice removes els and returns them. Removes (startIndex, #toRemove)
let myArr = [0, 1, 2, 3, 4]
console.log(myArr.splice(1, 3))
console.log(myArr)

// slice takes a subset of the array without altering the original array. (startIndexInclusive, endIndexExclusive)
let myArr2 = [0, 1, 2, 3, 4]
console.log(myArr2.slice(1, 3))
console.log(myArr2)

// Math.max gets the max of the array
let myArr3 = [0, 1, 2, 3, 4]
console.log(Math.max(...myArr3))

// Get string character at index 
myStr = "012345"
console.log(myStr[1])

// Sort Array Numerically
let myArr4 = [8, 7, 22, 1, 3, 9, 3]
console.log(myArr4)
myArr4.sort(function(a, b){return a - b})
console.log(myArr4)