/**
 * Given an array of strings, group anagrams together
 * Example: Input: ["eat", "tea", "tan", "ate", "nat", "bat"], Output: [["ate","eat","tea"],["nat","tan"],["bat"]]
 */

// Iterate over all strings 
// Sort them to get hash key, and store them in the hash map 
// Iterate over the hash map and return all of the arrays
// O((# strings)(O(str length)log(str length)))
var groupAnagrams = function(strs) {
    if (strs.length == 0) {
        return []
    }
    let groups = {}
    for (let i = 0; i < strs.length; i++) {
        let entry_sorted = strs[i].split("").sort().join("")
        if (groups[entry_sorted]) {
            groups[entry_sorted].push(strs[i])
        } else {
            groups[entry_sorted] = [strs[i]]
        }
    }
    let group_names = Object.keys(groups)
    let groups_array = []
    for (let k = 0; k < group_names.length; k++) {
        groups_array.push(groups[group_names[k]])
    }
    return groups_array
};

let input_arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(input_arr))

// Better sol - Counting each letter is more efficient than sorting the strings - O(n) vs O(nlogn)