/**
 * Product of Array Except Self 
 * 
 * Given an array
 * Return the array where each element contains the product of all elements except itself
 * In other words, the result of multiplying together the whole array except for nums[i]
 * 
 * Ex. Input - [1, 2, 3, 4], Output - [24, 12, 8, 6]
 */

var productExceptSelf = function(nums) {
    // Cover base cases
    if (nums.length == 0) {
        return nums
    }
    if (nums.length == 1) {
        return nums[0]
    }

    // Get the products of all numbers multiplied up to a certain point, from n to 0
    let running_products_reversed = []
    running_products_reversed[nums.length-1] = nums[nums.length-1]
    for (let k = nums.length - 2; k >= 0; k--) {
        running_products_reversed[k] = running_products_reversed[k+1] * nums[k]
    }

    // Get all products of all numbers multiplied up to a certain point, from 0 to n
    // In same loop, calculate the product except self as cache1[i-1]*cache2[i+1]
    // We can do this in the same loop because we always need the cache at i-1, which has been calculated
    let result = [running_products_reversed[1]]
    let running_products = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        running_products[i] = running_products[i-1] * nums[i]
        let left_products = running_products[i-1]
        let right_products = 1
        if (i < nums.length -1) {
            right_products = running_products_reversed[i+1]
        }
        result[i] = left_products*right_products
    }
    return result
};

console.log(productExceptSelf([1, 2, 3, 4, 5, 6]))