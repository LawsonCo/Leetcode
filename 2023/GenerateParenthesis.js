/**
 * @param {number} n
 * @return {string[]}
 * 
Given n pairs of parentheses, write a function to generate all 
combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
 */

class Entry {
    constructor(string, opens, totalOpens) {
        this.string = string
        this.opens = opens
        this.totalOpens = totalOpens
    }
}
var generateParenthesis = function(n) {
    // We know there has to be N * 2 characters 
    // At each step, we can either add parenthesis or not
    // We can only add parenthesis if there is an open bracket
    // If we add a closing bracket, we can increase n


    // Is there a recursive nature here? 

    if (n == 0) {
        return []
    }

    let combinations = [new Entry("(", 1, 0)]


    // Build up from 1? 
    for (let i = 1; i < n*2; i++) {
        let newCombinations = []
        for (let k = 0; k < combinations.length; k++) {
            let curr = combinations[k]
            if (curr.opens > 0) {
                let newCurr = new Entry(curr.string + ")", curr.opens-1, curr.totalOpens)
                console.log("Curr---")
                console.log(newCurr)
                newCombinations.push(newCurr)
            }
            if (curr.totalOpens < n-1) {
                let newCurr = new Entry(curr.string + "(", curr.opens+1, curr.totalOpens+1)
                console.log("Curr---")
                console.log(newCurr)
                newCombinations.push(newCurr)
            }
        }
        combinations = newCombinations
        console.log(newCombinations)
    }

    let result = []
    for (let k = 0; k < combinations.length; k++) {
        result.push(combinations[k].string)
    }

    return result
};

console.log(generateParenthesis(3))
//console.log(generateParenthesis(1))
