/**
Given an integer array nums, 
return an array answer such that answer[i] is equal to the 
product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed 
to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and 
without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 */

// If devision was allowed
var productExceptSelf = function(nums) {
    // First idea: 
    // Multiply all and then devide by number
    // Problem is that if there is a 0 we run into issues
    // Fix this by tracking zeroes? 

    let zero_map = {}
    let total_product = 1

    for (let i=0; i<nums.length; i++) {
        if (nums[i] == 0) {
            zero_map[i] = true
        } else {
            total_product = total_product*nums[i]
        }
    }

    let result = []

    // Handle zeroes
    if (Object.keys(zero_map).length > 0) {
        
        for (let k = 0; k < nums.length; k++) {
            result[k] = 0
        }
        if (Object.keys(zero_map).length == 1) {
            result[Object.keys(zero_map)[0]] = total_product
        }
        return result
    }

    // Handle non-zeroes
    for (let i=0; i<nums.length; i++) {
        result.push(total_product / nums[i])
    }
    return result
};

//console.log(productExceptSelf([1,2,3,4]))
//console.log(productExceptSelf([-1,1,0,-3,3]))

// Devision not allowed, create an array of all products to the left of each index
// And an array of all products to the right of each index 

var productExceptSelf2 = function(nums) {
    if (nums.length == 0) {
        return nums
    }
    if (nums.length == 1) {
        return [0]
    }
    let productsToLeft = [0, nums[0]]
    for (let i=2; i < nums.length; i++) {
        productsToLeft[i] = productsToLeft[i-1] * nums[i-1]
    }

    let productsToRight = new Array(nums.length)
    productsToRight[nums.length-1] = 0
    productsToRight[nums.length-2] = nums[nums.length-1]

    for (let i=nums.length-3; i >=0; i--) {
        productsToRight[i] = productsToRight[i+1] * nums[i+1]
    }

    let result = []
    for (let i=0; i < nums.length; i++) {
        let left = i > 0 ? productsToLeft[i] : 1
        let right = i < nums.length-1 ? productsToRight[i] : 1

        result.push(left * right)
    }
    return result;
}

console.log(productExceptSelf2([1,2,3,4]))
console.log(productExceptSelf2([-1,1,0,-3,3]))
