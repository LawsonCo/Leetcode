/**
Given an array of integers temperatures represents the daily temperatures, 
return an array answer such that answer[i] is the number of 
days you have to wait after the ith day to get a warmer temperature. 

If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0]

 */
var dailyTemperatures = function(temperatures) {
    if (temperatures.length == 0) {
        return 0
    }

    let stack = [{val:temperatures[0], index: 0}]
    let result = []

    for (let i = 1; i < temperatures.length; i++) {
        while (stack.length > 0 && stack[stack.length-1].val < temperatures[i]) {
            let curr = stack.pop()
            result[curr.index] = i - curr.index
        }
        stack.push({val: temperatures[i], index: i})
    }
    while (stack.length > 0) {
        let curr = stack.pop()
        result[curr.index] = 0
    }
    return result
};

console.log(dailyTemperatures([30,60,90]))

// Monotonic (Decreasing stack)
// Everytime we see a smaller item, add it to the stack 
// When we see a larger than top of stack, we can start to pop from stack 
    // Continue popping until top is larger than new item, then push it on to stack 