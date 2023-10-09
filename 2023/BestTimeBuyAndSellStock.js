/**
You are given an array prices where prices[i] 
is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and 
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */
var maxProfit = function(prices) {
    // 2 pointers!
    // Start with indexes 0 & 1 (i , k)
    // If k+1 > i, 
    let i = 0, k = 0;
    let profit = 0
    while (k < prices.length) {
        console.log("i: " + i + " k: " + k)
        if (i==k) {
            k++
        } else {
            let currProfit = prices[k] - prices[i]
            console.log(currProfit)
            profit = currProfit > profit ? currProfit : profit
            if (prices[k] < [prices[i]]) {
                i = k
            } else {
                k++
            }
        }
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))