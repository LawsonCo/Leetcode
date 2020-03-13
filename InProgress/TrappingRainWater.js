/**
 * Trapping Rain Water
 * 
 * Given an array of heights, how much water can you trap?
 */

var trap = function(height) {
    let highest = height[0]
    let last_height = highest
    let totalVolume = 0
    for (let i = 1; i < height.length; i++) {
        console.log("Currently on item: " + height[i] + " Highest is: " + highest + " last height is: " + last_height + " curr height is: " + height[i] + " Total Volume is: " + totalVolume)
        if (highest - height[i] - last_height > 0) {
            console.log("Adding height: " + highest - height[i] - last_height)
            totalVolume += highest - height[i] - last_height
        }
        if (last_height > highest) {
            highest = last_height
        }
        last_height = height[i]
    }
    return totalVolume
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))