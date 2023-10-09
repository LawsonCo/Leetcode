/**
Suppose an array of length n sorted in ascending order is 
rotated between 1 and n times. For example, the array nums = 
[0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]]
1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
 */

var findMinRec = function(startInclusive, endInclusive, first, nums) {
    console.log("Start: " + startInclusive + " End: " + endInclusive + " First " + first)
    if (startInclusive > endInclusive) {
        return false
    }
    if (startInclusive == endInclusive) {
        return nums[startInclusive]
    }
    let mid = Math.floor((endInclusive + startInclusive) / 2)
    console.log("Mid: " + mid)
    if (nums[mid] < first) {
        return findMinRec(startInclusive, mid, first, nums)
    } else {
        return findMinRec(mid+1, endInclusive, first, nums)
    } 
};

var findMin = function(nums) {
    console.log("Looking for min")
    let first = nums[0]
    let res = findMinRec(1, nums.length-1, first, nums)
    if (first < res) {
        return first
    }
    return res
};

console.log(findMin([3,4,5,1,2]))
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([11,13,15,17]))

// If N+1 is less than N, we found the rotation point 
// Number of rotations == (Index N) + 1
// Minimum number is when N+1 < N because it was originally sorted 

// If N-1 < N, we can discard all to the left -> This is sorted order!
// ----> Not true, if we are beyond rotation point 
// Compare to first el! 

// If N is less than index 0, we are beyond inflection point! 
// If N is more than index 0, we are before inflection point 

// Solved using binary search!  