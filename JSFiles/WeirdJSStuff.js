// Using an array as a map key
var myArr = [1, 2, 3, 4]
var myObj = {}
myObj[myArr] = "This somehow worked"

var myKeyObj = {"apples": "red"}
myObj[myKeyObj] = "This also somehow worked"
myObj[1] = "And this"
console.log(myObj)
console.log(myObj[myKeyObj])

// Setting an arbitrary array index without setting anything in the middle
var mySkipIndexArr = [1]
mySkipIndexArr[5] = 100
console.log(mySkipIndexArr)
console.log(mySkipIndexArr[2])