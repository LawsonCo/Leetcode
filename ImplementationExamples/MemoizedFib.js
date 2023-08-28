
// Solve fibonacci with memoization - cut runtime down by an exponential factor to O(n)
function fibonacci(i) {
    // Define memo outside of the scope of nested function
    var memo = {}
    // Define nested inline function and call it with i
    // stores every val it sees in the memo map to avoid
    // repeating computations
    return function memoizedFib(n) {
        if (n == 0) {
            return 0
        }
        if (n == 1) {
            return 1
        }
        if (memo[n] == null) {
            console.log("Calculating value " + n + " for the first time")
            memo[n] = memoizedFib(n - 1) + memoizedFib(n - 2)
        }
        return memo[n]
    }(i)
}

// Bastardized version of fibonacci that passes in the memo on each call 
// problem here is that the map gets passed in by value, so anything set in 
// a lower level doesn't propogate upwards. We end up duplicating work 
// in different branched forks
function bastardizedFibonacci(i) {
    // define this nested memoized fib
    return function memoizedFib(n, memo) {
        // way to hack memo into working
        memo = memo || {}
        if (n == 0) {
            return 0
        }
        if (n == 1) {
            return 1
        }
        if (memo[n] == null) {
            console.log("Calculating value " + n + " for the first time")
            memo[n] = memoizedFib(n - 1) + memoizedFib(n - 2)
        }
        return memo[n]
    }(i, {})
}

// Naive fibonacci that uses recursion and runs in O(2^n)
function terribleFibonacci(i) {
    if (i == 0) {
        return 0
    }
    if (i == 1) {
        return 1
    }
    console.log("Calculating value " + i + " for the first time")
    return terribleFibonacci(i - 1) + terribleFibonacci(i - 2)
}

//console.log(bastardizedFibonacci(11))
//console.log(terribleFibonacci(11))
console.log(fibonacci(11))


// General memoization: 

// memoizeAnything is a function to turn any function into a memoized version of itself
// this generates and returns a function that comes with a closured map that keep track of all seen values
function memoizeAnything(func) {
    // Create a closured cache
    var cache = {}
    // Generate the augmented version of func to include the cache
    return function(...args) {
        // Using an array as a map key works because in JS the array automatically gets converted to a string
        // ie. [1, 2, 3] becomes '1, 2, 3'
        if (cache[args] != null) {
            return cache[args]
        }
        cache[args] = func(...args)
        return cache[args]
    }
}

// Generate fastFib by passing slowFib to it
const fastFib = memoizeAnything(slowFib);

// This is kind of bastardized because it's defining a function using a function defined using it... but nevertheless this 
// works in JavaScript somehow
function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fastFib(n - 1) + fastFib(n - 2);
}

console.log(fastFib(11))