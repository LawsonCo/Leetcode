/**
 * Implement IndexOf
 * 
 * Given string and substring, return first index of substring appearance in string 
 * Return -1 if does not exist
 * Return 0 if substring is ""
 */

var strStr = function(haystack, needle) {
    if (needle == "") {
        return 0
    }
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack[i] == needle[0]) {
            let substr = true
            for (let k = 1; k < needle.length; k++) {
                if (haystack[i + k] != needle[k]) {
                    substr = false
                    break
                }
            }
            if (substr) {
                return i
            }
        }
    }
    return -1
};

let t_haystack = "hello"
let t_needle = "ll"
console.log(t_haystack)
console.log(t_needle)
console.log(indexOf(t_haystack, t_needle))