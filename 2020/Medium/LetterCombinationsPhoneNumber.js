/**
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

const digit_map = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
};

var letterCombinations = function(digits) {
    if (digits.length == 0) {
        return []
    }
    let results = digit_map[digits[0]]
    // Iterate over all digits given to the function
    for (let i = 1; i < digits.length; i++) {
        console.log("looping1")
        // If there is a mapping for the digit, add permutations for this
        let chars = digit_map[digits[i]]
        if (chars != undefined) {
            let newResults = []
            // Create 3 new permutations for each result
            for (k = 0; k < results.length; k++) {
                for (m = 0; m < chars.length; m++) {
                    newResults.push(results[k] + chars[m])
                }
            }
            results = newResults
        }
    }
    return results
};

console.log(letterCombinations("23"))
