/**
 * Climbing Stairs 
 * 
 * Given n - #Steps 
 * Output - Number of possible ways to climb the stairs
 */

function climbStairs(n) {
    let memo = {}
    let memoizedClimb = function(n) {
        if (n < 0) {
            return 0
        }
        if (n == 0) {
            return 1
        }
        if (memo[n]) {
            return memo[n]
        }
        let total = memoizedClimb(n-2)
        total += memoizedClimb(n-1)
        memo[n] = total
        return total
    } 
    return memoizedClimb(n)
}

function climbStairsBottomUp(n) {
    let memo = {0:0, 1:1, 2:2}
    for (let i = 3; i <= n; i++) {
        // Since there is only 1 possible way to get to i-1, and i-2, taking those first steps does not add an extra combination
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n]
}


console.log(climbStairsBottomUp(3))