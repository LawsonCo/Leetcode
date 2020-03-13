/**
 * Jump Game 
 * 
 * Given an array that represents the maximum jump distance from that index, see if you can get to last index
 */


// Top down is impossible, try bottom up

var canJump = function(nums) {
    let memo = {}
    memo[nums.length-1] = true
    for (let i = nums.length-2; i >= 0; i--) {
        memo[i] = false
        for (let k = nums[i]; k > 0; k--) {
            // Calculate where taking k steps from i would land
            let diff = k+i
            // If it is bigger than the array, it is false
            if (diff > nums.length-1) {
                continue
            }
            // Since we have calculated all posibilities after this point, 
            // Look up if it is possible to achieve a result after taking a step this far
            if (memo[k+i]) {
                memo[i] = true
                break
            }
        }
    }
    //console.log(memo)
    return memo[0]
};

console.log(canJump([3,2,1,0,1,4]))