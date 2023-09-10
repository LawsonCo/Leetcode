/**
You are given an array of integers nums, 
there is a sliding window of size k which 
is moving from the very left of the array to the very right. 
You can only see the k numbers in the window. 
Each time the sliding window moves right by one position.

Return the max sliding window.
 */
var maxSubsequence = function(nums, k) {
    if (k > nums.length - 1) {
        return []
    }

    let bestSum = 0
    let bestWindowStart = 0
    let bestWindowEnd = k-1

    for (i=0; i < k; i++) {
        bestSum += nums[i]
    }

    let sum = bestSum
    let windowStart = 1;
    let windowEnd = k

    while (windowEnd < nums.length) {
        sum = sum - nums[windowStart-1] + nums[windowEnd]
        if (bestSum < sum) {
            bestSum = sum
            bestWindowStart = windowStart
            bestWindowEnd = windowEnd
        }
        windowStart++
        windowEnd++
    }

    return nums.slice(bestWindowStart, bestWindowEnd+1)
};

console.log(maxSubsequence([2,1,3,3], 2))
console.log(maxSubsequence([1,3,-1,-3,5,3,6,7], 3))