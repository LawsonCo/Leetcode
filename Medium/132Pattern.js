// 132 Pattern
// Given an array, return a bool 
// See if it contains a 132 pattern 
// Small, Big, Medium - i,j,k - ai < ak < aj

function compareEls(first, second, third) {
    return (first < third) && (third < second) && (first < second)
}

function find132pattern (nums) {
    if (nums.length == 0) {
        return false
    }
    let min_at_index = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        min_at_index[i] = Math.min(min_at_index[i-1], nums[i])
    }
    //console.log(min_at_index)
    let min_right_greater_than_min_on_left = false
    for (let i = nums.length-1; i >= 1; i--) {
        if (min_at_index[i-1] < nums[i]) {
            console.log("Candidate: " + nums[i] + " smallest on left " +  min_at_index[i-1] + " min_right_greater_than_min_on_left: " + min_right_greater_than_min_on_left)
            if (!min_right_greater_than_min_on_left) {
                min_right_greater_than_min_on_left = nums[i]
                console.log("cont")
                continue
            } else {
                console.log(min_right_greater_than_min_on_left > min_at_index[i-1])
                console.log(min_right_greater_than_min_on_left < nums[i])
                if (min_right_greater_than_min_on_left < min_at_index[i-1]) {
                    min_right_greater_than_min_on_left = nums[i]
                } else if (min_right_greater_than_min_on_left > min_at_index[i-1] && min_right_greater_than_min_on_left < nums[i]) {
                    return true
                    //min_right_greater_than_min_on_left = Math.min(min_right_greater_than_min_on_left, nums[i])
                }
            }
            console.log("Candidate: " + nums[i] + " smallest on left " +  min_at_index[i-1] + " min_right_greater_than_min_on_left " + min_right_greater_than_min_on_left)
        }
    }
    return false
}

//let nums = [-1, 3, 2, 0]
let nums2 =  [-2,1,2,-2,1,2]

console.log(find132pattern(nums2))

/*
console.log(compareEls(1, 3, 2))
console.log(compareEls(1, 2, 3))
console.log(compareEls(2, 3, 1))
console.log(compareEls(2, 1, 3))
console.log(compareEls(3, 2, 1))
console.log(compareEls(3, 1, 2))
*/
