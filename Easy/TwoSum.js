/**
 * Two Sum 
 * 
 * Given an array of integers and a target
 * Return array of the indices of the numbers that add up to the target
 * Cannot use the same number twice 
 * 
 * nums = [2, 7, 11, 15], target = 9
 */

var twoSum = function(nums, target) {
    let seen_nums = {}
    for(let i = 0; i < nums.length; i++) {
        let needed_num = target - nums[i]
        // Have to explicitly check for undefined since 0 will eval to nul
        if (seen_nums[needed_num] != undefined) {
            return [i, seen_nums[needed_num]]
        }
        seen_nums[nums[i]] = i
    }
};

console.log(twoSum([2, 7, 1, 15], 9))