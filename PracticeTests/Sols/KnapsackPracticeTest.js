let total_computations = 0
function nonMemoizedKnapsack (maxWeight, weights, values, n) {
    if (maxWeight <= 0 || n <= 0) {
        return 0
    }
    console.log("Total comps: " + total_computations)
    total_computations++

    // For each item, can either take the item or not
    console.log(values[n-1])
    if (weights[n-1] > maxWeight) {
        return nonMemoizedKnapsack(maxWeight, weights, values, n-1)
    }
    return Math.max(
        // take item 
        values[n-1] + nonMemoizedKnapsack(maxWeight - weights[n-1], weights, values, n-1), 
        // don't take item
        nonMemoizedKnapsack(maxWeight, weights, values, n-1)
    )
}

// expect 220, 20 comps
// Notice all of that repeated work!
console.log(nonMemoizedKnapsack(50, [20, 30, 10, 30, 23], [100, 120, 50, 50, 5], 5))
console.log("=============================================================================")

function memoizedKnapsack(maxWeight, weights, values, n) {
    let total_computations = 0
    let memo = [[]]
    return function memoizedKnapsackInternal(maxWeight, weights, values, n) {
        if (maxWeight <= 0 || n <= 0) {
            return 0
        }
        if (memo[maxWeight] && memo[maxWeight][n]) {
            return memo[maxWeight][n]
        }

        console.log("Total comps: " + total_computations)
        total_computations++
    
        // For each item, can either take the item or not
        if (!memo[maxWeight]) {
            memo[maxWeight] = []
        }
        if (weights[n-1] > maxWeight) {
            memo[maxWeight][n] = memoizedKnapsackInternal(maxWeight, weights, values, n-1)
        }
        memo[maxWeight][n] = Math.max(
            // take item 
            values[n-1] + memoizedKnapsackInternal(maxWeight - weights[n-1], weights, values, n-1), 
            // don't take item
            memoizedKnapsackInternal(maxWeight, weights, values, n-1)
        )
        return memo[maxWeight][n]
    }(maxWeight, weights, values, n)
}

// expect 220, 18 comps
// Notice the efficiency
console.log(memoizedKnapsack(50, [20, 30, 10, 30, 23], [100, 120, 50, 50, 5], 5))