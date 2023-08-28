const TEST_OBJ = {"a": "0", "b": "1", "c": "2"}
const TEST_ARRAY = ["0", "1", "2", "3", "4"]
const TEST_STRING = "abcd"
const TEST_INT = 5
const TEST_INT_STRING = "10"

console.log("-- JS Syntax Practice Test --")

// Get object Keys
console.log("[Get Object Keys] The first key of test object is: " + Object.keys(TEST_OBJ)[0])

// Get object Vals
console.log("[Get Object Vals] The first value of test object is: " + Object.values(TEST_OBJ)[0])

// Split string by char
console.log("[Split string by Char] Second item in split string arr is: " + TEST_STRING.split("")[1])

// Join Strings by char
console.log("[Join Strings by char] Joining test arr by '-' is: " + TEST_ARRAY.join("-"))

// Lengh of array + runtime
console.log("[Lengh of array] Length of test array is: " + TEST_ARRAY.length)
console.log("[Lengh of array] Runtime is: " + "O(1)")

// Length of string
console.log("[Length of string] Length of test strin is: " + TEST_STRING.length)

// Absolute value
console.log("[Absolute value] Absolute value of -1 is: " + Math.abs(-1).toString())

// Get char in string
console.log("[Get char in string] Second char of test string is: " + TEST_STRING.charAt(1))

// Get substring
console.log("[Get substring] Second and third chars of test string are: " + TEST_STRING.substring(1,3))

// Get section of array
console.log("[Get section of array] Joining test arr by '-' is: " + TEST_ARRAY.join("-"))

// Clone object
let test_obj_clone = {...TEST_OBJ}
console.log("[Clone object] Test obj clone is: " + test_obj_clone.toString())

// Clone array
let test_arr_copy = [...TEST_ARRAY]
console.log("[Clone array] Test array clone is: " + test_arr_copy.toString())

// Primitives / Non-Primitives are passed as ? 
// Reference or reference to pointer

// Take n args in fn
// Pass n args in fn
function myFn(...args) {
    return args.toString();
}
console.log("[Pass n args in fn] Logged args from n arg fn are: " + myFn(...TEST_ARRAY))

// Sparse array
let arr = []
arr[3] = 3
console.log("[Sparse array] An example of a sparse array is: " + arr.toString())

// Append to array + runtime
// Runtime: O(1)
TEST_ARRAY.push(5)
console.log("[Append to array] Adding to 5 test array looks like: " + TEST_ARRAY.toString())

// Remove from array + runtime
// Runtime: O(1)
TEST_ARRAY.pop()
console.log("[Remove from array] Adding to 5 test array looks like: " + TEST_ARRAY.toString())

// Remove from front of array + runtime
// Runtime: O(n)
TEST_ARRAY.shift()
console.log("[Remove from front of array] Removing from front of array looks like: " + TEST_ARRAY.toString())

// Remove from middle of array + runtime
// Runtime: O(n)
let test_arr_2 = [...TEST_ARRAY]
test_arr_2.splice(1, 2)
console.log("[Remove from middle of array] Removing middle items from array looks like: " + test_arr_2.toString())

// Array Sort + runtime + numerically + what is default sort logic
// Runtime: O(NLogN)
// Default sort order is: Alphabetic
let alphabetic_array = ["b", "a", "c"]
alphabetic_array.sort()
console.log("[Array Sort Default] Sorted array is: " + alphabetic_array.toString())

let numeric_array = [2, 1, 3]
numeric_array.sort((a,b) => a - b)
console.log("[Array Sort Numeric] Sorted array is: " + numeric_array.toString())

// Create Set, Add, Remove, Iterate
let my_set = new Set("a")
console.log("[Create Set] New set is: " + my_set.toString())
my_set.add("b")

console.log("[Add to Set] Set with added item is: " + my_set.toString())
my_set.add("b")

console.log("[Iterate Set] Iterated Set items are: ")
my_set.forEach(function(a){ console.log(a) } )

my_set.delete("b")
console.log("[Delete from Set] Set with deleted item is: " + my_set.toString())

// Let vs. Var. vs. Const
// Let:
// Var:
// Const

// String -> Int
console.log("[String -> Int] Converted string is: " + parseInt(TEST_INT_STRING))

// Int -> String
console.log("[Int -> String] Converted int is: " + TEST_INT.toString())

// Combine arrays 
//What happens to original? 
let second_arr = ["new_1", "new_2"]
console.log("[Combine arrays] Adding new arr to old looks like: " + TEST_ARRAY.concat(second_arr).toString())

// Find substring 
console.log("[Find substring ] Finding 'bc' in test string looks like: " + TEST_STRING.indexOf("bc"))

// Get part of a string 
console.log("[Get part of a string ] Getting the second 2 chars from the test string looks like: " + TEST_STRING.substring(1, 3))

// Upper/Lower case
console.log("[Upper case] Test string in upper case is: " + TEST_STRING.toUpperCase().toString())
console.log(TEST_STRING)

// Get type of thing
console.log("[Get type of thing] Type of test string is: " + typeof(TEST_STRING))

// What is === ?

// Switch/Case/Default
console.log("[Switch/Case/Default] Example switch case is: ")
switch(TEST_STRING){
    case ("Something random"):
        console.log("unexpected")
    case(TEST_STRING):
        console.log("Match!")
}

switch(TEST_STRING){
    case ("Something random"):
        console.log("unexpected")
    default:
        console.log("Match 2!")
}

// Try/Catch/Finally/Throw Error
console.log("[Try/Catch/Finally/Throw Error] Example try/catch/finally with exception is: ")
try {
    throw new Error("Test exc")
} catch (e) {
    console.log("Caught exc: " + e.toString())
} finally {

}

// Common Array functions are:
console.log("[Common Array functions] Common array fns are: ")
TEST_ARRAY.forEach(a => console.log(a))
console.log(TEST_ARRAY.reduce((acc, next) => acc + next))
console.log(TEST_ARRAY.map(a => a + 10).toString())
console.log(TEST_ARRAY.some(a => a === "1"))

// Define Class
class Dog {
    constructor(colour) {
        this.colour = colour
    }

    bark() {
        console.log("Super barking")
    }
}

// Extend SuperClass
class Golden extends Dog{
    constructor(personality, colour) {
        super(colour)
        this.personality = personality
    }

    roll() {
        console.log("rolling")
    }
}

let my_golden = new Golden("cool", "golden")
console.log(my_golden.colour)
console.log(my_golden.personality)
my_golden.bark()
my_golden.roll()