/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
Given two strings s1 and s2, 
return true if s2 contains a 
permutation of s1, or false otherwise.

In other words, return true if one of s1's 
permutations is the substring of s2.


Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) {
        return false
    }
    let s1Chars = {}
    for (i=0; i < s1.length; i++) {
        console.log()
        s1Chars[s1[i]] = s1Chars[s1[i]] ? s1Chars[s1[i]]+1 : 1
    }

    let s1Keys = Object.keys(s1Chars)
    let substringChars = {}
    let right = 0;
    left = 0;
    while (right <= s2.length) {
        let currChar = s2[right]
        console.log("Curr Char: " + currChar)
        console.log(substringChars)
        console.log("Left: " + left)
        // start by checking if we have a solution 
        // Later replace this with a hashfn
        let solution = true;
        for(k = 0; k < s1Keys.length; k++) {
            if (substringChars[s1Keys[k]] != s1Chars[s1Keys[k]]) {
                solution = false 
                break
            }
        }
        if (solution) {
            return true
        }


        // In this case the chars will be empty
        if (left == right) {
            substringChars[currChar] = 1
        } else {
            // If char doesn't exist in s1, discard whole substring and set left == val
            if (!s1Chars[currChar]) {
                console.log("char doesn't exist in s1")
                substringChars = {}
                left = right
                substringChars[currChar] = 1
            } else {
                console.log("char exists in s1")
                console.log(substringChars)
                console.log(substringChars[currChar])
                if (!substringChars[currChar] || substringChars[currChar] < s1Chars[currChar]) {
                    console.log("We need it!")
                    console.log(substringChars[currChar])
                    console.log(s1Chars[currChar])
                    substringChars[currChar] = substringChars[currChar] ? substringChars[currChar]+1 : 1
                } else {
                    console.log("We dont need it")
                    
                    console.log(substringChars[currChar] >= s1Chars[currChar])
                    while (substringChars[currChar] >= s1Chars[currChar]) {
                        let leftChar = s2[left]
                        // Discard left values
                        console.log("Discarding left value: " + leftChar)
                        console.log(substringChars)
                        substringChars[leftChar] = substringChars[leftChar] > 0 ? substringChars[leftChar]-1 : 0
                        left = left+1
                    }
                    substringChars[currChar] = substringChars[currChar] ? substringChars[currChar]+1 : 1
                }
            }
        }
        right++
    }
    return false
};

console.log(checkInclusion("ab", "eidbaooo"))
console.log(checkInclusion("ab", "asddboba"))


/*
Sol: 

Note it must be a consecutive substring.
At each new val, check if we need it to form a substring
If char doesn't exist in s1, discard whole substring and set left == val
If char does exist in original, either
---> iterate left until we have the right number of newchar
---> Continue on 

*/

// Count all items in S1, 
// 