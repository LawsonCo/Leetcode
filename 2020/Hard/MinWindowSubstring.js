
// Min Window 
// Given a string of chars - ADOBECODEBANC, and a substring - ABC
// Find min window that includes all chars

function checkContainsSubstring (seen, required) {
    for (i = 0; i < required.length; i++) {
        if (required[i] != seen[i]) {
            return false
        }
    }
    return true
}

console.log(checkContainsSubstring("ADOBECODEBANC", "ABC"))

var minWindow = function(s, t) {
    let slow = 0
    let fast = 0
    let current_chars = {}
    let current_min_window = ""
    while (slow < s.length) {
        //console.log("Slow: " + slow + " Fast: " + fast + " Window: " + s.slice(slow, fast))
        //console.log(current_chars)
        if (checkContainsSubstring(current_chars, required_chars)) {
            let new_min_window = s.slice(slow, fast)
            console.log("Found window! " + new_min_window)
            if (new_min_window.length < current_min_window.length || current_min_window=="") {
                current_min_window = new_min_window
            }
        }
        if (fast == s.length || checkContainsSubstring(current_chars, s.slice(slow, fast))) {
            current_chars[s[slow]]--
            slow++
        } else {
            if (current_chars[s[fast]]) {
                current_chars[s[fast]]++
            } else {
                current_chars[s[fast]] = 1
            }
            fast++
        }
    }    
    return current_min_window
};

//console.log(minWindow("ADOBECODEBANC", "ABC"))