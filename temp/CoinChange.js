/**
 * Coin Change 
 * 
 * Given coins of different denominations (an array of coins), and a total amount of money
 * Return the minimal set of coins required to produce that change (The min number)
 * **** MAY ASSUME YOU HAVE INFINITE AMOUNTS OF EACH COIN DENOMINATION
 * 
 * Given [1, 2, 5], 11 - Return 3
 */

// Solve with Top Down Dynamic Programming
var coinChange = function(coins, amount) {
    let seen_amounts = {}
    let solve = function (coins, amount) {
        if (amount == 0) {
            return 0
        }
        if (amount < 0) {
            return -1
        }
        if (!seen_amounts[amount]) {
            let set_of_possible_valid_choices = []
            for (let i = 0; i < coins.length; i++) {
                let choice = solve(coins, amount - coins[i])
                if (choice >= 0) {
                    set_of_possible_valid_choices.push(1 + solve(coins, amount - coins[i]))
                }
            }
            if (set_of_possible_valid_choices.length == 0) {
                seen_amounts[amount] = -1
            } else {
                seen_amounts[amount] = Math.min(...set_of_possible_valid_choices)
            }
        }
        return seen_amounts[amount]
    }
    return solve(coins, amount)
};

let test_arr = [1, 2, 5]
let test_amount = 11
console.log(test_arr)
console.log(test_amount)
console.log(coinChange(test_arr, test_amount))