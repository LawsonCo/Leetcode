/**
You are given a string s and an integer k. 
You can choose any character of the string and 
change it to any other uppercase English character. 
You can perform this operation at most k times.

Return the length of the longest substring containing 
the same letter you can get after performing the above
operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achive this answer too.

 * @param {string} s
 * @param {number} k
 * @return {number}
 */

function needToEvict(charCounts, k) {
    console.log("=== Checking eviction =====")
    let chars = Object.keys(charCounts)
    let currMaxItem = ""
    let longest = 0
    for (i=0; i < chars.length; i++) {
        if(charCounts[chars[i]] > longest) {
            longest = charCounts[chars[i]] 
            currMaxItem = chars[i]
        }
    }
    console.log("Curr Max Item " + currMaxItem)
    for (i=0; i < chars.length; i++) {
        console.log(chars[i])
        console.log(k)
        if (chars[i] == currMaxItem) {
            continue
        } else {
            k = k - charCounts[chars[i]]
        }
    }
    if (k >= 0) {
        console.log("=== false =====")
        return false
    }
    console.log("=== true =====")
    return true
}

//console.log(needToEvict({"A": 6, "B": 2, "C": 1}, 4))

var characterReplacement = function(s, k) {
    if (s.length == 1 || s.length == 0) {
        return s.length
    }
    let left=0; right=1
    let charCounts = {}
    charCounts[s[0]] = 1
    let longest = 1
    let currSize = 1
    while (right <= s.length) {
        if (left == right) {
            console.log("left == right, growing")
            right++
            charCounts[s[right]] = charCounts[s[right]] ? charCounts[s[right]]+1 : 1
            currSize++
        } else {
            console.log("Curr char", s[right])
            console.log(charCounts)
            if (needToEvict(charCounts, k)) {
                console.log("Need to evict")
                if (charCounts[s[left]] > 1) {
                    charCounts[s[left]] = charCounts[s[left]]-1
                } else {
                    delete charCounts[s[left]]
                }
                currSize--
                left++
            } else {
                console.log("Don't need to evict")
                longest = longest < currSize ? currSize : longest
                charCounts[s[right]] = charCounts[s[right]] ? charCounts[s[right]]+1 : 1
                currSize++
                console.log("Curr size: " + currSize)
                right++
            }
        }
    }
    return longest
};

//console.log(characterReplacement("ABAB", 2))
console.log(characterReplacement("AABABBA", 1))


/*
Sol: 
In its essence, we are looking for a sequence with 

This is an obvious sliding window problem. Just need to figure out conditions on which we slide windows 

If (left == right) {
    right++
}

Condition: 
K deviations from the char with the most instances

Problem: 
How to store seen chars and find char with most instances? 
-> Map to store chars
   -> O(1) to insert & update 
   -> O(k) to check which is char with most chars
   ------> This could be O(N^2) if all chars are unique
   ------> Only actually need to compare the new count to the highest, so no need to check all except on eviction
   Actually need to check all keys anyway to see if this works, so it will always be O(K)
-> Heap to store chars with most instances? 
   // O(Log(N)) insert & Update
   // O(1 get)
*/
