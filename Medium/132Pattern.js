// 132 Pattern
// Given an array, return a bool 
// See if it contains a 132 pattern 
// Small, Big, Medium - i,j,k - ai < ak < aj

function compareEls(first, second, third) {
    return (first < third) && (third < second) && (first < second)
}

function find132pattern (nums) {
    for (let i = 0; i < nums.length-2; i++) {
        if (compareEls(nums[i], nums[i+1], nums[i+2])) {
            return true
        }
    }
    return false
}

let nums = [-1, 3, 2, 0]
let nums2 = [3,5,0,3,4]

// console.log(find132pattern(nums))

console.log(compareEls(1, 3, 2))
console.log(compareEls(1, 2, 3))
console.log(compareEls(2, 3, 1))
console.log(compareEls(2, 1, 3))
console.log(compareEls(3, 2, 1))
console.log(compareEls(3, 1, 2))
