// Naive fibonacci that uses recursion and runs in O(2^n)
function terribleFibonacci(i) {
    console.log("Calculating value " + i + " for the first time")
}

// Solve fibonacci with memoization - cut runtime down by an exponential factor to O(n)
function fibonacci(i) {
    let memo = []
    let memoizedFib = function(n) {
        if (n == 0) {
            return 0
        }
        if (n == 1) {
            return 1
        }
        if (memo[n]) {
            return memo[n]
        } else {
            console.log("Calculating value " + n + " for the first time")
            memo[n] = memoizedFib(n-1) + memoizedFib(n-2)
            return memo[n]
        }
    }
    return memoizedFib(i)
}

console.log(fibonacci(11))
//console.log(terribleFibonacci(11))

// Expect 89