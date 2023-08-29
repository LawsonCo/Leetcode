function nonMemoizedKnapsack (maxWeight, weights, values, n) {
    var memo = [[]]
    var total_computations = 0
    return function knapsack (maxWeight, weights, values, n) {
        if (n == 0 || maxWeight == 0) {
            return 0
        }
        if (weights[n-1] > maxWeight) {
            total_computations++
            console.log("Computing for max Weight: " + maxWeight + " and n: " + n)
            console.log("Total comps: " + total_computations)
            return knapsack(maxWeight, weights, values, n-1)
        }
        total_computations++
        console.log("Computing for max Weight: " + maxWeight + " and n: " + n)
        console.log("Total comps: " + total_computations)
        return Math.max(values[n-1] + knapsack(maxWeight - weights[n-1], weights, values, n-1), knapsack(maxWeight, weights, values, n-1))
    }(maxWeight, weights, values, n)
}

// expect 220
// Notice all of that repeated work!
console.log(nonMemoizedKnapsack(50, [20, 30, 10, 30, 23], [100, 120, 50, 50, 5], 5))
console.log("=============================================================================")

function memoizedKnapsack(maxWeight, weights, values, n) {
    // Initialize the memo as a nested array. 0 and 1 are just placeholders
    var memo = []
    for (var i = 0; i < n; i++) {
        memo[i] = []
    }
    var total_computations = 0
    return function knapsack (maxWeight, weights, values, n) {
        // Base case
        if (n == 0 || maxWeight == 0) {
            return 0
        }
        // Case where we've already seen the value
        if (memo[n-1] != undefined && memo[n-1][maxWeight] != undefined) {
            return memo[n-1][maxWeight]
        }
        // Case where we can't take the item because it exceeds weight
        if (weights[n-1] > maxWeight) {
            total_computations++
            console.log("Computing for max Weight: " + maxWeight + " and n: " + n)
            console.log("Total comps: " + total_computations)
            memo[n-1][maxWeight] = knapsack(maxWeight, weights, values, n-1)
        } else {
            // Case where we can take the item, so we need to compute which scenario is more efficient 
            total_computations++
            console.log("Computing for max Weight: " + maxWeight + " and n: " + n)
            console.log("Total comps: " + total_computations)
            memo[n-1][maxWeight] = Math.max(
                // Take the item
                values[n-1] + knapsack(maxWeight - weights[n-1], weights, values, n-1), 
                // Don't take the item
                knapsack(maxWeight, weights, values, n-1))
        }
        return memo[n-1][maxWeight]
    }(maxWeight, weights, values, n)
}

// expect 220
// Notice the efficiency
console.log(memoizedKnapsack(50, [20, 30, 10, 30, 23], [100, 120, 50, 50, 5], 5))

