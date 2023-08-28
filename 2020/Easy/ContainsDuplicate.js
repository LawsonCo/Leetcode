/**
 * Given an array of integers, find if the array comtains any duplicates
 * 
 * Input = [1, 2, 3, 1], Output - T
 * Input = [1, 2, 3, 4], Output - F
 */

var containsDuplicate = function(nums) {
    // Base case
    if (nums.length == 0) {
        return false
    }
    
    // Cache all seen numbers, return if we find a duplicate
    let cache = {}
    for (let i = 0; i < nums.length; i++) {
        if (cache[nums[i]]) {
            return true
        }
        cache[nums[i]] = true
    }
    return false
};