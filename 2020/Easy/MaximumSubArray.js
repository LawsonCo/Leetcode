/**
 * Maximum SubArray
 * Given an array of numbers 
 * Find a contiguous subarray with the largest sum
 * Input: [-2,1,-3,4,-1,2,1,-5,4], Outut: 6, Result of: [4,-1,2,1]
 */

// Solve with sliding window
// Have 2 iterators - Increment the one that creates a larger sum. Find the largest possible sum
var maxSubArray = function(nums) {
    // Base case
    if (nums.length == 0) {
        return 0
    }
    let slow = 0
    let fast = 0
    let best = nums[0] 
    let curr_window = nums[0] 
    while (slow < nums.length && fast < nums.length) {
        if (curr_window > best) {
            best = curr_window
        }
        console.log("curr window: " + curr_window)
        if (slow == fast) {
            fast++
            curr_window += nums[fast]
        } else {
            if (fast+1 >= nums.length) {
                curr_window -= nums[slow]
                slow++
            }
            else if (curr_window-nums[slow] > curr_window+nums[fast+1]) {
                curr_window -= nums[slow]
                slow++
            } else {
                fast++
                curr_window += nums[fast]
            }
        } 
    }
    if (curr_window > best) {
        best = curr_window
    }
    while (slow < nums.length) {
        if (curr_window > best) {
            best = curr_window
        }
        curr_window -= nums[slow]
        slow++
    }
    return best
};

let test_arr = [2,-3,1,3,-3,2,2,1]

console.log(maxSubArray(test_arr))