/**
Given an integer array nums and an integer k, 
return the k most frequent elements. You may 
return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

 */
var topKFrequent = function(nums, k) {
    // Count elements with map O(N)
    // Iterate over map and get items by highest val - HOW? 
        // Sort map items by highest val 
        // {A: 1, B: 5, C, 10}
            // Copy vals into an array and sort O(N + NlogN)
            // Copy into map of count to val O(N) -> PROBLEM: Duplicate counts
            // Retrieve O(N)
    let counts = {}
    for (i = 0; i < nums.length; i++) {
        counts[nums[i]] = counts[nums[i]] ? counts[nums[i]] + 1 : 1
    }
    
    console.log(counts)
    let sortedCountValues = Object.values(counts).sort((a, b) => b - a)
    console.log(sortedCountValues)

    let countToValuesMap = {}

    let result = []

    for (let i = 0; i < k; i++) {
        let currCount = sortedCountValues[i]

        let countsVals = Object.values(counts)
        console.log("CurrCount: " + currCount)
        console.log("CountsVals: " + countsVals)

        for (let k = 0; k < countsVals.length; k++) {
            if (countsVals[k] == currCount) {
                result.push(Object.keys(counts)[k])
                delete counts[Object.keys(counts)[k]]
                break
            }
        }
    }
    return result
};

console.log(topKFrequent([1,1,1,2,2,3, 3, 3, 3, 3], 2))
console.log(topKFrequent([1,1,1,2,2,3], 2))
console.log(topKFrequent([1], 1))
console.log(topKFrequent([1, 2], 2))


// SHOULD HAVE USED A DAMN HEAP 
// Note that a heap is also called a Priority Queue 
