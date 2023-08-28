/**
 * Best Time to Buy and Sell Stock
 * 
 * Given an array of stock values - Index x = day x
 * Permitted to complete only 1 buy and 1 sell
 * Find the optimal profit possible (a number)
 * 
 * Given [7,1,5,3,6,4], Output 5
 * ie. Buy at 1, sell at 6
 */

var maxProfit = function(prices) {
    if (prices.length == 0) {
        return 0
    }
    let min_so_far = prices[0]
    let best_value = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min_so_far) {
            min_so_far = prices[i]
        }
        let curr_best_value = prices[i] - min_so_far
        if (curr_best_value > best_value) {
            best_value = curr_best_value
        }
    }
    return best_value
};

let test_arr = [7,6,4,3,1]
console.log(test_arr)
console.log(maxProfit(test_arr))