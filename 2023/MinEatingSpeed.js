/**
Koko loves to eat bananas. 
There are n piles of bananas, 
the ith pile has piles[i] bananas. 
The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. 
Each hour, she chooses some pile of bananas and eats k bananas from that pile. 
If the pile has less than k bananas, she eats all of them instead and 
will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the 
bananas before the guards return.

Return the minimum integer k such that she can eat all the 
bananas within h hours.

Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23

 */

function testKIsValid(k, piles, h) {
    let operations = 0
    for (i = 0; i < piles.length; i++) {
        let curr = piles[i]
        while (curr > 0) {
            if (operations >= h) {
                return false
            }
            curr = curr - k
            operations++
        }
    }
    return true
}
console.log(testKIsValid(2, [3,6,7,11], 8))

function minEatingSpeedRecursive(piles, left, right, h) {
    console.log("Left: " + left + " Right: " + right)
    if (left > right) {
        return false
    }
    if (left == right) {
        return left
    }
    let mid = Math.floor((right + left) / 2)
    if (testKIsValid(mid, piles, h)) {
        console.log("K: " + mid + " is valid!")
        return minEatingSpeedRecursive(piles, left, mid, h)
    } else {
        console.log("K: " + mid + " is not valid!")
        return minEatingSpeedRecursive(piles, mid+1, right, h)
    }
}

var minEatingSpeed = function(piles, h) {
    let maxDivisor = Math.floor(piles.length / h)
    let max = maxDivisor > 0 ? Math.max(...piles) / maxDivisor : Math.max(...piles)
    let min = Math.ceil(piles.reduce( (a,b) => a + b)/ h)
    console.log("Max Divisor: " + maxDivisor + " Max: " + max + " Min: " + min)
    return minEatingSpeedRecursive(piles, min, max, h)
};

console.log(minEatingSpeed([3,6,7,11], 8))
//console.log(minEatingSpeed([30,11,23,4,20, 6, 5, 4, 2, 1], 5))
//console.log(minEatingSpeed([30,11,23,4,20], 6))


// Maximum K = the maximum of all piles, will eat 1 entire pile per hour
// Minimum possible K is 1. 
// Range is 0 ... Max of the piles 

// TRY BRUTE FORCE FIRST! YOU MIGHT LEARN SOMETHING
// In this case, for each K we try, we have to iterate over all piles O(N)
// We could try all possible K's (O(NK))
// Or we can try K's in binary search algorithm, bringing us to (O(Nlog(K))) 
 // How will be know optimal solution when we find it? 
  // If K is valid but K-1 
  // Iterate until left and right overlap