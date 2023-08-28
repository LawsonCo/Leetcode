/**
 * Combination Sum 
 * Given a set of numbers and a target
 * Find all the unique ways the numbers can sum to the target
 * Example: Input: [2,3,6,7], target = 7, Output: [7], [2,2,3]
 * 
 * The same number may be chosen an unlimited number of times
 */

// Brute force - O(n!) - For each n, consider each n-1, then for n-1, consider all n-2... Ugh.
class Solution {
    constructor(arr) {

    }
}

// Better solution - Dynamic programming
// Since the same number may be chosen an unlimited number of times, we can store an array of solutions for each target
// O(candidates * targets)
// The issue with this solution was duplicate detection. I patched in an ugly fix at the end that I don't really like. 
//
// Observe that this is identical to the coin change problem except it actually asks for the combinations, not just the number of combos
// Consider top down - The duplicate problem would still persist. Need a more efficient way to handle this. 
// Seems like all the solutions are sort of hacky, I think this is acceptable
function combinationSum(candidates, target) {
    let memo = [] // Array of solutions for different targets
    for (let current_target = 0; current_target <= target; current_target++) {
        let set_for_current_target = []
        let cache_for_current_target = {}
        for (let k = 0; k < candidates.length; k++) {
            let candidate = candidates[k]
            if (candidate == current_target) {
                set_for_current_target.push([candidate])
            }
            let distance_from_0 = current_target - candidate
            if (distance_from_0 > 0) {
                for (let j = 0; j < memo[distance_from_0].length; j++) {
                    let new_set = [...memo[distance_from_0][j]]
                    new_set.push(candidate)
                    new_set.sort()
                    if (!cache_for_current_target[new_set]) {
                        cache_for_current_target[new_set] = true
                        set_for_current_target.push(new_set)
                    }
                }
            }
        }
        memo[current_target] = set_for_current_target
    }
    return memo[target]
}

let test_arr = [1, 2]
let target = 4
console.log(combinationSum(test_arr, target))