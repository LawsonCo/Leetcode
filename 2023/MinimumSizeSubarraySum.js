/**
Given an array of positive integers nums and a positive integer target, 
return the minimal length of a subarray whose sum is greater than or equal to target. 
If there is no such subarray, return 0 instead.

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 */
var minSubArrayLen = function(target, nums) {
    let start = 0
    let end = 0
    let bestLength = 999999
    let sum = nums[0]

    if (nums.length == 0) {
        return 0
    }

    while (end < nums.length && start < nums.length) {
        if (sum >= target) {
            //console.log("Setting best len with start: " + start + " and end: " + end)
            bestLength = Math.min(bestLength, end - start + 1)
            if (start != end) {
                sum = sum - nums[start]
                start++
            } else {
                end++
                if (end < nums.length) {
                    sum = sum + nums[end]
                }   
            }
        } else {
            end++
            if (end < nums.length) {
                sum = sum + nums[end]
            }
        }
    }
    return bestLength == 999999 ? 0 : bestLength
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))
console.log(minSubArrayLen(4, [1,4,4]))
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]))
console.log(minSubArrayLen(15, [5,1,3,5,10,7,4,9,2,8]))