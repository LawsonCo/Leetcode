/**
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
 */

 /**
Solution Idea: 
Iterate over all arrays at once, return when the character at that index is not equal
  */

var longestCommonPrefix = function(strs) {
    let longestCommon = ""
    if (strs.length == 0) {
        return longestCommon
    }
    let i = 0 
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]
        for (let k = 1; k < strs.length; k++) {
            if (i > strs[k].length || strs[k][i] != char) {
                return longestCommon
            }
        }    
        longestCommon += char
    }
    return longestCommon
};

console.log(longestCommonPrefix(["dog","racecar","car"]))