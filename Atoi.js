/**
Example 1:

Input: "42"
Output: 42
Example 2:

Input: "   -42"
Output: -42
Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.
Example 3:

Input: "4193 with words"
Output: 4193
Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
Example 4:

Input: "words and 987"
Output: 0
Explanation: The first non-whitespace character is 'w', which is not a numerical 
             digit or a +/- sign. Therefore no valid conversion could be performed.
Example 5:

Input: "-91283472332"
Output: -2147483648
Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−231) is returned.
 */

const INT_MIN = -2147483648
const INT_MAX = 2147483647

var myAtoi = function(str) {
    let sign = 1
    let num = 0
    let hasSeenSign = false
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "-") {
            if (hasSeenSign) {
                return 0
            }
            sign = -1
            hasSeenSign = true
            continue
        }
        if (str[i] == " ") {
            if (hasSeenSign) {
                return 0
            }
            continue
        }
        if (str[i] == "+") {
            if (hasSeenSign) {
                return 0
            }
            hasSeenSign = true
            continue
        }
        if (Number.isInteger(parseInt(str[i]))) {
            num = getNum(str, i, sign)
            return num
        } else {
            return 0
        }
    }
    return num
};

function getNum(str, i, sign) {
    num = 0
    while (i < str.length) {
        if (num > INT_MAX) {
            return INT_MAX
        }
        if (num < INT_MIN) {
            return INT_MIN
        }
        if (isNaN(parseInt(str[i]))) {
            return num
        }
        num *= 10
        num += (parseInt(str[i]) * sign)
        i++
    }
    if (num > INT_MAX) {
        return INT_MAX
    }
    if (num < INT_MIN) {
        return INT_MIN
    }
    return num
}

console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))
console.log(myAtoi("2147483648"))