/**
 * Remove Element
 * 
 * Given array and a value, remove all instances of that value in place 
 * By remove, they mean move them to the end of the array. 
 * Alter the array by moving all instances to the end, and then return the length at which there are no
 * instances of that el
 * 
 * Given nums = [0,1,2,2,3,0,4,2] and val 2
 * Expect nums to become = [0, 1, 3, 0, 4, etc...], return 5 - the new len of relavent numbers
 */

function swap(nums, first, second) {
    let temp = nums[first]
    nums[first] = nums[second]
    nums[second] = temp
}

var removeElement = function(nums, val) {
    let last_val = nums.length
    for (i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == val) {
            last_val--
            swap(nums, i, last_val)
        }
    }
    return last_val
};

var test_arr = [3,2,2,3]
console.log(test_arr)
console.log(removeElement(test_arr, 3))
console.log(test_arr)