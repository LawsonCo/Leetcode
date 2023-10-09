/**
 * @param {string} s
 * @return {number}
 * 
Given a string s, find the length of the longest 
substring
without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.

Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

var lengthOfLongestSubstring = function(s) {
    // Sliding window 
    // As soon as a repeating char is encountered, move left. If none, move write
    if (s.length <= 1) {
        return s.length
    }
    let hashset = {}
    hashset[s[0]] = true
    let i = 0, k=1;
    let max = 0

    while (k < s.length) {
        console.log("CHecking..")
        // Case where we haven't seen item 
        let char = s.charAt(k)
        if (!hashset[char]) {
            console.log("New Char! " + char)
        } else {
            console.log("Found duplicate! " + char)
            // Case where we have seen item 
            while (hashset[char]) {
                let discardedChar = s[i]
                //console.log(discardedChar)
                delete hashset[discardedChar]
                i++
            }
        }
        hashset[char] = true
        let len = Object.keys(hashset).length
        max = max > len ? max : len
        //console.log(hashset)
        //console.log(max)
        k++
    }
    return max;
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("pwwkew"))

// Consider case: pwwkew
// Once we see second w, we can restart from second w. We won't ever see a bigger string if we iterate forward from last char


/*
let char = s[k]
if (hashSet[char]) {
    console.log(char)
    console.log("Upcoming string invalid!")
    i++
    delete hashSet[char]
    string.shift()
    string.push(char)
} else {
    console.log("Valid string!")
    hashSet[char] = true

    k++
    string.push(char)
}
*/


/*
Accidentally solved much harder problem! Returning the actual vals of the longest substring

var lengthOfLongestSubstring = function(s) {
    // Sliding window 
    // As soon as a repeating char is encountered, move left. If none, move write


    if (s.length <= 1) {
        return s
    }
    let hashset = {}
    let string = [s[0]]
    hashset[string] = true
    let i = 0, k=1;
    let max = ""

    while (k < s.length) {
        // Case where we haven't seen item 
        let char = s.charAt(k)
        if (!hashset[char]) {
            console.log("New Char! " + char)
        } else {
            console.log("Found duplicate! " + char)
            // Case where we have seen item 
            while (i < k) {
                let discardedChar = s[i]
                console.log(discardedChar)
                delete hashset[discardedChar]
                string.shift()
                i++
            }
        }
        hashset[char] = true
        string.push(char)
        max = max.length > string.length ? max : string.join("")
        console.log(hashset)
        console.log(string)

        k++
    }
    return max;
};
*/