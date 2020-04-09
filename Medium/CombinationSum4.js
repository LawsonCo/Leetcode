/**
 * Combination Sum 
 * Given a set of numbers and a target
 * Find the number of ways the numbers can sum to the target
 * Example: Input: [2,3,6,7], target = 7, Output: 7 
 * 
 * NOTE - WE ACTUALLY JUST WANT THE NUMBER, NOT HOW MANY COMBOS (much easier)
 * 
 * The same number may be chosen an unlimited number of times
 */

// Solve bottom up!
var combinationSum4 = function(nums, target) {
    let memo = {}
    for (let i = 1; i <= target; i++) {
        memo[i] = 0
        for (let k = 0; k < nums.length; k++) {
            if (((i - nums[k]) == 0)) {
                memo[i]++
            }
            if (((i - nums[k]) > 0) && memo[i - nums[k]]) {
                memo[i]+=memo[i - nums[k]]
            }
        }
    }
    return memo[target]
};

console.log(combinationSum4([1, 2, 3], 4))
/*
let test_memo = {2: [ [1, 2, 3], [4, 5, 6] ], 3: []}
console.log(test_memo)
buildSolSet(test_memo, 3, 2, 500)
console.log(test_memo)

let test_memo_2 = {2: [ [1, 2, 3], [4, 5, 6] ], 0: []}
console.log(test_memo_2)
buildSolSet(test_memo_2, 0, 2, 500)
console.log(test_memo_2)
*/