function nonMemoizedKnapsack (maxWeight, weights, values, n) {
    let total_computations = 0
    console.log("Total comps: " + total_computations)
}

// expect 220, 20 comps
// Notice all of that repeated work!
console.log(nonMemoizedKnapsack(50, [20, 30, 10, 30, 23], [100, 120, 50, 50, 5], 5))
console.log("=============================================================================")

function memoizedKnapsack(maxWeight, weights, values, n) {
    let total_computations = 0
    console.log("Total comps: " + total_computations)
}

// expect 220, 18 comps
// Notice the efficiency
console.log(memoizedKnapsack(50, [20, 30, 10, 30, 23], [100, 120, 50, 50, 5], 5))