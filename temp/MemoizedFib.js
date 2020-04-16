function memFib(num) {
    let memo = {}
    let memoized = function(inner) {
        if (inner == 0) {
            return 0 
        }
        if (inner == 1) {
            return 1
        }
        if (memo[inner]) {
            return memo[inner]
        }
        console.log("Computing for " + inner)
        memo[inner] = memoized(inner - 1) + memoized(inner - 2)
        return memo[inner]
    }
    return memoized(num)
}

console.log(memFib(9))