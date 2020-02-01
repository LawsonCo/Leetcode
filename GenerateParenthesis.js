/**
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */


  /**
Solution: 
Recursive traversal of valid string states
- each terminus case is a valid string 
- Only valid solutions explored
- Every recursive call yields a valid solution 
---> Explanation written in notebook
  */

var generateParenthesis = function(n) {
    let sols = []
    generateRecursively(sols, "", 0, 0, n)
    return sols
}

function generateRecursively(sols, currString, open, close, n) {
    if (currString.length == n*2) {
        sols.push(currString)
    } else {
        if (open < n) {
            generateRecursively(sols, currString + "(", open + 1, close, n)
        }
        if (close < open) {
            generateRecursively(sols, currString + ")", open, close + 1, n)
        }
    }
}

console.log(generateParenthesis(4))

 /**
Incorrect Solution: 
Notice that at any given value, there are only 3 patterns which recurse on other patterns 
()[n - 1]
[n-1]()
([n-l])

Problem: Recursive structure is not correct. Counter-Example: (())(())
  */

var generateParenthesis2 = function(n) {
    if (n == 0) {
        return []
    }
    if (n == 1) {
        return ["()"]
    }
    let last = generateParenthesis(n - 1)
    let result = []
    let seen = {}
    for (i = 0; i < last.length; i++) {
        // Only add new permutations
        if (seen["()" + last[i]] == undefined) {
            result.push("()" + last[i])
            seen["()" + last[i]] = true
        }
        if (seen["(" + last[i] + ")"] == undefined) {
            result.push("(" + last[i] + ")")
            seen["(" + last[i] + ")"] = true
        }
        if (seen[last[i] + "()"] == undefined) {
            result.push(last[i] + "()")
            seen[last[i] + "()"] = true
        }
    }
    return result
}