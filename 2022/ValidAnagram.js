
/**
Given two strings s and t, 
return true if t is an anagram of s, 
and false otherwise.

An Anagram is a word or phrase formed by 
rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
 */
var isAnagram = function(s, t) {
    if (t.length != s.length ) {
        return false
    }
    let sMap = {}
    for (i = 0; i < s.length; i++) {
        let newVal = sMap[s.charAt(i)]
        sMap[s.charAt(i)] = newVal ? newVal+1 : 1
    }
    for (i = 0; i < t.length; i++) {
        if (sMap[t.charAt(i)] !== undefined && sMap[t.charAt(i)] > 0) {
            sMap[t.charAt(i)] = sMap[t.charAt(i)]-1
        } else {
            return false
        }
    }
    return true
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
console.log(isAnagram("a", "ab"))


