/**
 * Remove Duplicates from Sorted Array 
 * 
 * Given: nums = [1,1,2] -> Return [1, 2]
 * Ie. Remove all but 1 instance of the duplicate
 * 
 * MUST DO THIS WITH O(1) MEMORY - ie. IN PLACE.
 */

function swap(nums, first, second) {
    let temp = nums[first]
    nums[first] = nums[second]
    nums[second] = temp
}

var removeDuplicates = function(nums) {
    let last_unique_index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[last_unique_index] != nums[i]) {
            last_unique_index++
            swap(nums, last_unique_index, i)
        }
    }
    last_unique_index++
    return last_unique_index
};

let test_arr = [0,0,1,1,1,2,2,3,3,4]
console.log(test_arr)
console.log(removeDuplicates(test_arr))
console.log(test_arr)

let test_arr2 = [1,1,2]    
console.log(test_arr2)
console.log(removeDuplicates(test_arr2))
console.log(test_arr2)