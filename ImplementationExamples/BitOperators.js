console.log("After setting MyBits as a some binary with 0b1111")
var myBits = 0b1111
console.log(myBits)

console.log("After bit masking to only take the 2 leftmost bits")
var myMask = 0b1100
var myMaskedBits = myBits & myMask
console.log(myMaskedBits)

console.log("String representation of my bits: " + myBits.toString(2))

console.log("Shifting my bits right by 2")
var myShiftedBits = myBits >> 2
console.log(myShiftedBits.toString(2))

console.log("Shifting my bits left by 2")
var myShiftedBits = myBits << 2
console.log(myShiftedBits.toString(2))