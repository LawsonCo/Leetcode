/**
Determine whether an integer is a palindrome. 
An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Could you solve it without converting the integer to a string?
 */

var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let stack = []
    let copy = x
    // How many digits does x have? 
    // Iterate from right to left 
    // Send a runner that skips every 1 digit
    // When runner hits end, start popping off of stack
    let runnerX = x
    while (runnerX > 0) {
        digit = x % 10
        stack.push(digit)
        x = Math.floor(x/10)
        runnerX = Math.floor(runnerX/100)
    }
    // 2 cases - 8887888 case
    //         - 888877888 case
    // Determing which case it is by dividing the original number by 10^stacksize-1
    // if it doesn't give us at least 1, we know the number of digits is odd. If we get
    // at least one, we know the number of digits is even.
    // Odd size
    let lengthEven = Math.pow(10, stack.length * 2 - 1)
    if (Math.min(copy / lengthEven) < 1) {
        curr = stack.pop()
    }
    while (x > 0) {
        digit = x % 10
        curr = stack.pop()
        x = Math.floor(x/10)

        if (digit != curr) {
            return false
        }
    }
    return true
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))
console.log(isPalindrome(8887888))
console.log(isPalindrome(88877888))