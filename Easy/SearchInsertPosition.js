/**
 * Search Insert Position
 * 
 * Given a SORTED array and a target value
 * Return the index of the target, or return the index where it would be in inserted order
 */

/*
var searchInsert = function(nums, target) {
    // Run a binary search
    // If not found 
};
*/

function moddedBinarySearch(start, end, nums, target) {
    if (start >= end) {
        return start
    }
    let mid = Math.floor((start+end)/2)
    if (nums[mid] == target) {
        console.log("Found " + target + " at " + mid)
        return mid
    }
    if (target < nums[mid]) {
        return moddedBinarySearch(start, mid, nums, target)
    } else {
        return moddedBinarySearch(mid+1, end, nums, target)
    }
}

var searchInsert = function(nums, target) {
    return moddedBinarySearch(0, nums.length, nums, target)
};


let test_arr = [1,3,5,6]
console.log(searchInsert(test_arr, 5))