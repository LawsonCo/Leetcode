/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 
Given a 1-indexed array of integers numbers that is
already sorted in non-decreasing order, find two numbers 
such that they add up to a specific target number. 
Let these two numbers be numbers[index1] and numbers[index2] 
where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, 
index1 and index2, added by one as an 
integer array [index1, index2] of length 2.

The tests are generated such that there is 
exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 */

// Solved without constant memory
var twoSumNonConstant = function(numbers, target) {
    let set = {}
    for(let i = numbers.length; i >= 0; i--) {
        let remainder = target - numbers[i]
        if (set[remainder]) {
            return [i+1, set[remainder]+1]
        } else {
            set[numbers[i]] = i
        }
    }
};
console.log(twoSumNonConstant([2,7,11,15], 9))

// Solved without constant memory
var twoSum = function(numbers, target) {
    let i = 0, k = numbers.length-1
    while(i<k) {
        let sum = numbers[i] + numbers[k]
        console.log(i)
        console.log(k)
        if (sum == target) {
            return [i+1, k+1]
        }
        if (sum < target) {
            i++
        }
        if (sum > target) {
            k--
        }
    }
};

console.log(twoSum([2, 3, 4], 6))


// Sol (From LC)
// Have pointer going up from front and down from end
// If front + back > target, decrease back, we will never have a smaller number
// If front + back < target, increase front, we will never have a bigger number