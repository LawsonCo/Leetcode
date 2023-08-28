/**
Convert numbers betwen 1 and 3999 to roman numerals

Basic structure: 
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

Basically a value can be repeated up to 3 times to denote "add this value", but on the forth, it goes up to the next incremental symbol
and you must add a preceding value to denote subtraction

Example: 
Input: 1994
Output: "MCMXCIV"

4 = IV
8 = VIII 
9 = IX
13 = XIII
Special cases are 4's and 9's
 */

/**
Solution idea: 
Iterate from right to left, handle each number along the way
 */


// Handle digit will be a big switch statement to handle each digit from 0 -> 9
// It will generate a string using the smaller ten value, five value, and larger ten value
// roman numeral for that particular place
function handleDigit(digit, smallerTenValue, fiveValue, biggerTenValue) {
    switch(digit) {
        case 1:
            return smallerTenValue
        case 2:
            return smallerTenValue + smallerTenValue
        case 3:
            return smallerTenValue + smallerTenValue + smallerTenValue
        case 4:
            return smallerTenValue + fiveValue
        case 5: 
            return fiveValue
        case 6:
            return fiveValue + smallerTenValue
        case 7: 
            return fiveValue + smallerTenValue + smallerTenValue
        case 8:
            return fiveValue + smallerTenValue + smallerTenValue + smallerTenValue
        case 9:
            return smallerTenValue + biggerTenValue
    }
}

// tenValues is an array holding the ten value for each specific digit index
const tenValues = ["I", "X", "C", "M"]
// tenValues is an array holding the five value for each specific digit index
const fiveValues = ["V", "L", "D"]

var intToRoman = function(num) {
    let romanNumeral = ""
    let i = 0
    while (num > 0) {
        let digit = num % 10
        num = Math.floor(num / 10)
        if (digit > 0) {
            if (tenValues.length > i) {
                romanNumeral = handleDigit(digit, tenValues[i], fiveValues[i], tenValues[i + 1]) + romanNumeral
            } else {
                romanNumeral = handleDigit(digit, tenValues[i], fiveValues[i], "") + romanNumeral
            }
        }
        i++
    }
    return romanNumeral
};

console.log(intToRoman(1995))
// console.log(handleDigit(9, "I", "V", "X"))