/**
 * HARD 
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * 
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


 */
var findMedianSortedArrays = function(nums1, nums2) {
    
};

// Thoughts: Merging 2 sorted arrays takes O(N) time... too long!
// Median is the middle number

// 2 pointers? Also takes O(N)
// Binary search right array for the first item larger than the largest in left 
// U
