/**
 * Longest Substring Without Repeating Characters
 * 
 * Given a string - "abcabcbb", Return integer length of longest substr without repeating chars - 3
 */

// Sliding window approach
var lengthOfLongestSubstring = function(s) {
    if (s.length == 0) {
        return 0
    }
    let slow = 0
    // Note that fast is always 1 index ABOVE the last checked range
    let fast = 0
    let longest_found = 0
    let seen_map = {}
    while (slow < s.length && fast < s.length) {
        if (!seen_map[s[fast]]) {
            seen_map[s[fast]] = true
            fast++
            longest_found = Math.max(longest_found, fast - slow)
        } else {
            seen_map[s[slow]] = false
            slow++
        }
    }
    return longest_found
};

let test_str = "au"
console.log(test_str)
console.log(lengthOfLongestSubstring(test_str))