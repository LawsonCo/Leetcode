// Given an array of heights 
// Calculate the most possible rainwater that can be stored
// See notes for solution
// Basically, we want to first store the max left so far and max right so far for each index
// Then iterate over the array and calc the most water that can be stored at that index 

var trap = function(height) {
    let max_lefts = [height[0]]
    let max_rights = []
    max_rights[height.length-1] = height[height.length-1]
    for (let i = 1; i < height.length; i++) {       
        max_lefts[i] = Math.max(height[i], max_lefts[i-1])
    }
    for (let i = height.length-2; i >=0; i--) {
        max_rights[i] = Math.max(height[i], max_rights[i+1])
    }

    let sum = 0
    for (let i = 0; i < height.length; i++) {
        let curr_water = Math.min(max_lefts[i], max_rights[i])-height[i]
        if (curr_water > 0) {
            sum+=curr_water
        }
    }
    return sum
};

let test_heights = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(test_heights))