/**
Given an array of strings strs, 
group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by 
rearranging the letters of a different word or 
phrase, typically using all the original letters exactly once.


Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
 */
var groupAnagrams = function(strs) {
    // Sort chars, put them into a map 
    let anagramGroups = {}
    for (let i =0; i < strs.length; i++) {
        let string = strs[i]
        // SORT DOES NOT ALTER ORIGINAL ARRAY
        string = string.split("").sort()
        if (anagramGroups[string]) {
            anagramGroups[string].push(strs[i])
        } else {
            anagramGroups[string] = [strs[i]]
        }
    }
    let groups = []
    Object.values(anagramGroups).forEach(group => groups.push(group))
    return groups
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))


// Time complexity is (NKlogK), where K is the number of chars

// ALTERNATIVE SOL: 
// Create a hash of the character count, which can be derived in O(K) time, where K is the # of chars
// Hash is better than (KLogK) time to categorize items 

