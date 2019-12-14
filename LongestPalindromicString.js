/**
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
 */


// Possible solution: 
// Iterate over the string and look for minimum palendromes 
// Min palendromes either have form cattac or catac
// Ie. they either have a middle or now. 
// When a candidate found, radiate outwards to see how big it is.  
// Worst case - O(n^2)
var longestPalindrome = function(s) {
    if (s.length == 0) {
        return ""
    }
    let largest = s[0]
    for (let i = 0; i < s.length; i++) {
        let current = growPalindrome(s, i)
        if (current.length > largest.length) {
            largest = current
        }
    }
    return largest
};

function growPalindrome(s, currIndex) {
    let i = 1
    let start = 0
    let end = 0
    // Case where palendrome has no middle value
    // ex. cattac
    let pattern1 = ""
    let pattern2 = ""
    if (currIndex - 1 >= 0 && currIndex + 1 <= s.length-1 && s[currIndex - 1] == s[currIndex + 1]) {
        pattern1 = s[currIndex]
        start = currIndex - 1
        end = currIndex + 1 
        if (start != end) {
            while (s[start] == s[end]) {
                pattern1 = s[start] + pattern1 + s[end]
                start--
                end++
                if (start < 0 || end > s.length - 1) {
                    break
                }
            }
        }
    // Case where palendrome has a middle value
    // ex. catac
    }
    if (currIndex + 1 <= s.length-1 && s[currIndex] == s[currIndex + 1]) {
        start = currIndex
        end = currIndex + 1
        if (start != end) {
            while (s[start] == s[end]) {
                pattern2 = s[start] + pattern2 + s[end]
                start--
                end++
                if (start < 0 || end > s.length - 1) {
                    break
                }
            }
        }
    }
    if (pattern1.length > pattern2.length) {
        return pattern1
    }
    return pattern2
}

console.log(longestPalindrome("ccc"))