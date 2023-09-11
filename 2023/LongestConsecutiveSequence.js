/**
 * @param {number[]} nums
 * @return {number}
 * 
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

You must write an algorithm that runs in O(n) time.
 */
var longestConsecutive = function(nums) {
    let items = {}

    for (let i = 0; i < nums.length; i++) {
        items[nums[i]] = true
    }

    let largestSequence = 0 
    let uniqueItems = Object.keys(items)
    console.log(items)
    for (let i = 0; i < uniqueItems.length; i++) {
        let currentSequence = 1
        let nextVal = parseInt(uniqueItems[i])-1
        console.log("Current item is: " + uniqueItems[i])
        //console.log(nextVal)
        //console.log(items[nextVal])

        // We should iterate backwards!
        while (items[nextVal]) {
            //console.log("assdsd")
            if (items[nextVal] === true) {
                currentSequence++
                nextVal--
            } else {
                console.log("Cache hit!")
                console.log(items)
                console.log(nextVal)
                console.log(items[nextVal])
                currentSequence = items[nextVal]+currentSequence
                //items[nextVal+1] = currentSequence
                console.log(currentSequence)
                break
            }
        }
        if (currentSequence > largestSequence) {
            largestSequence = currentSequence
        }
        //console.log("Setting 2")
        //console.log(nextVal)
        //console.log(nextVal-1)
        console.log(currentSequence)
        console.log("Setting: " + parseInt(nextVal+1))
        items[uniqueItems[i]] = parseInt(currentSequence)
    }
    console.log(items)
    return largestSequence
};

console.log(longestConsecutive([100,4,200,1,3,2]))
//console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
//console.log(longestConsecutive([1,0,-1]))


// Possible sols: 
// Sort array - O(NlogN)


// Iterate over all, put them into a map
// For each item look for its successor
    // If successor exists, look for next successor and next, count total successors
    // Up to O(N) for each, but it would never be O(N^2) because successors would only exist N times