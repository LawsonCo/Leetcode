/**
Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.


Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

 */
var searchByIndex = function(nums, startInclusive, endInclusive, target) {
    let mid = Math.floor((startInclusive + endInclusive) / 2)
    console.log("Start: " + startInclusive + " end: " + endInclusive + " mid: " + mid)
    if (startInclusive > endInclusive) {
        return -1
    }
    if (nums[mid] == target) {
        return mid
    }
    if (nums[mid] > target) {
        return searchByIndex(nums, startInclusive, mid-1, target)
    } else {
        return searchByIndex(nums, mid+1, endInclusive, target)
    }
};

var search = function(nums, target) {
    return searchByIndex(nums, 0, nums.length-1, target)
};

console.log(search([-1,0,3,5,9,12], 9))
console.log(search([-1,0,3,5,9,12], 2))