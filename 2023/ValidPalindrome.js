/**
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all 
non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 */

function checkAlphaNumeric(char) {
    code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}

var isPalindrome = function(s) {
    let i = 0;
    let k = s.length-1;
    
    while (i< k) {
        if (!checkAlphaNumeric(s[i])) {
            i++
            continue
        }
        if (!checkAlphaNumeric(s[k])) {
            k--
            continue
        }
        if (s[i].toLowerCase() !== s[k].toLowerCase()) {
            return false
        }
        i++
        k--
    }
    return true
};

//console.log(isPalindrome("a     manaplanacanalpa na@@@ma"))
console.log(isPalindrome("abca"))