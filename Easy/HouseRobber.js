// House Robber
// 
// Given an array of values 
// If you take one, you can't take the one adjacent
// What is the max value you can take? 
// ex [1, 2, 3, 1] -> return 4 (take 1 and 3)


// Try to solve bottom up
function rob(vals) {
    if (vals.length == 0) {
        return 0
    }
    if (vals.length == 1) {
        return vals[0]
    }
    if (vals.length == 2) {
        return Math.max(vals[0], vals[1])
    }
    // Initialize memoization
    let memo = []
    // Initialize base cases
    memo[vals.length-1] = vals[vals.length-1]
    memo[vals.length-2] = Math.max(vals[vals.length-2], vals[vals.length-1])
    for (let i = vals.length-3; i >=0; i--) {
        memo[i] = Math.max(vals[i]+memo[i+2], memo[i+1])
    }
    return memo[0]
}

console.log(rob([1, 2, 3, 1]))