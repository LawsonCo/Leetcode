// Receives a copy of a primitive
function alterPrimitive (x) {
    x = 100
}

// Receives a copy of a pointer
function alterObject (y) {
    // This works because we are changing the data value that the pointer refers to
    y.newField = "I have been set in function"
    y.existingField = "I have been set in function"

    // This won't work because we're overwriting the pointer
    y = {somethingWayDifferent: "New completely"}
}

// Testing altering a primitive in a function
// This will not persist
var x = 5
console.log("Original x " + x)
alterPrimitive(x)
console.log("After altering x " + x)
console.log("=========================================")

// Testing altering an object in a function 
// Any field changes will persist, resetting the pointer will not
var y = {existingField: "Original value", otherField: "I should remain unchanged"}
console.log("Original y " + JSON.stringify(y))
alterObject(y)
console.log("After altering y " + JSON.stringify(y))
console.log("=========================================")

// Testing altering an object that we have copied 
// This will persist
console.log("Altering value by just copying the variable (not passing to a function)")
var y = {existingField: "Original value", otherField: "I should remain unchanged"}
console.log("Original y " + JSON.stringify(y))
x = y
x.newField = "I have been set inline"
x.existingField = "I have been set inline"
console.log("After copying y to x and then altering x, y looks like " + JSON.stringify(y))
console.log("=========================================")

// Receives a copy of a pointer
function alterArray (y) {
    y[1] = "I have been set in alter function"
    y.push("I have been added in alter function")
    y = [9, 9, 9, 9]
}

// Testing altering an array
// Editing indexes or adding els persists, resetting the pointer will not
var x = [1, 2, 3, 4]
console.log("original x: " + x)
alterArray(x)
console.log("after passing x to alter function " + x)
console.log("=========================================")