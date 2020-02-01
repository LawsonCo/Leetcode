/**
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
Find all unique triplets in the array which gives the sum of zero. The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

/**
Problem analysis: 
If we have seen 2 numbers, we know definitively what the 3rd must be. 
If we have seen 1 number, we know what the other 2 must sum to.

Solve in O(n^2) by using a hashmap to store the 3rd number 
Iterate in O(n^2) pattern 
In outer loop, store each el in a map 
In inner loop, cal required element and look it up 
---> If it exists, set found
 */
var threeSum = function(nums) {
    let seenMap = {}
    let numMap = {}
    let sums = []
    let target = 0
    for (let i = 0; i < nums.length - 1; i++) {
        // Super critical that k = i + 1. Don't miss this. 
        // k needs to be all numbers after i
        for (k = i + 1; k < nums.length; k++) {
            let missingEl = 0 - (nums[i] + nums[k])
            if (numMap[missingEl] != undefined) {
                let newSum = [missingEl, nums[i], nums[k]].sort(function(a,b) {return a - b})
                if (seenMap[newSum] == undefined) {
                    seenMap[newSum] = true
                    sums.push(newSum)
                }
            }
        }
        numMap[nums[i]] = true
    }
    return sums
}

console.log(threeSum([3,-2,1,0]))