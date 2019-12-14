/**
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself. 

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

 */

// Note this is an older method of declaring a class 
// Just use it like a standard class declaration
function ListNode(val) {
     this.val = val;
     this.next = null;
}

// To Solve: 
// First need to traverse linked lists to create numbers

// How do we do this in O(n) time? - a single O(n) pass

// Construct example test case
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
let node1 = new ListNode(2)
let node2 = new ListNode(4)
let node3 = new ListNode(3)
node1.next = node2
node2.next = node3
first = node1

let node4 = new ListNode(5)
let node5 = new ListNode(6)
let node6 = new ListNode(4)
node4.next = node5
node5.next = node6
second = node4

//console.log(first)
//console.log(second)

// This is a working solution but fails when the size of the integer provided exceeds the maximum 
// safe integer size in javascript. 
function addTwoNumbersAttemptOne (l1, l2) {
    let node = new ListNode(5)
    let num1 = linkedListToNum(l1)
    let num2 = linkedListToNum(l2)
    let sum = num1 + num2
    console.log(sum)
    return numToLinkedList(sum)
};

// Convert linkedlist to num by multiplying each digit by the appropriate multipler 
// and then adding them together 
// Multiplier will increase by a factor of 10 on each loop
function linkedListToNum (list) {
    if (list.val == null) {
        return null
    }

    let multiplier = 10
    let sum = list.val

    while (list.next !== null) {
        list = list.next
        let curr = list.val
        if (curr != 0) {
            sum = sum + (curr * multiplier)
        }
        multiplier *= 10
    }
    console.log(sum)
    return sum
}

// Convert num to reversed linked list. 
// Take num % 10 to get the rightmost digit, take the digit, then take math.Floor(num/10) 
// We take the floor because the decimal value will be the digit we want to discard
function numToLinkedList (num) {
    let divider = 10
    let list = new ListNode(num % 10)
    let tail = list
    num = Math.floor(num / divider)

    while (num != 0) {
        tail.next = new ListNode(num % 10)
        tail = tail.next
        num = Math.floor(num / divider)
    }
    console.log(list)
    return list
}

//console.log(addTwoNumbersAttemptOne(first, second))

// This solution should be safe for integers up to length n. 
// Basically perform manual addition by interating over both linked lists simultanenously
// Never actually convert the lists to an integer so this should be safe for infinitely large integer inputs 
//
// Note that this is effectively just addition in reverse, since the linked list is given in reverse
//
// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
function addTwoNumbersAttemptTwo (l1, l2) {
    let result = null
    let tail = null
    let remainder = 0
    while (l1 !== null && l2 !== null) {
        digit = l1.val + l2.val + remainder
        remainder = 0
        if (digit >= 10) {
            digit = digit % 10
            remainder = 1
        }
        if (result === null) {
            result = new ListNode(digit)
            tail = result
        } else {
            tail.next = new ListNode(digit)
            tail = tail.next
        }
        l1 = l1.next
        l2 = l2.next
    }
    while (l1 !== null) {
        digit = l1.val + remainder
        remainder = 0
        if (digit >= 10) {
            digit = digit % 10
            remainder = 1
        }
        if (result === null) {
            result = new ListNode(digit)
            tail = result
        } else {
            tail.next = new ListNode(digit)
            tail = tail.next
        }
        l1 = l1.next
    }
    while (l2 !== null) {
        digit = l2.val + remainder
        remainder = 0
        if (digit >= 10) {
            digit = digit % 10
            remainder = 1
        }
        if (result === null) {
            result = new ListNode(digit)
            tail = result
        } else {
            tail.next = new ListNode(digit)
            tail = tail.next
        }
        l2 = l2.next
    }
    if (remainder != 0) {
        tail.next = new ListNode(1)
    }
    return result
}

let node10 = new ListNode(8)
let node11 = new ListNode(9)
let node12 = new ListNode(9)
node11.next = node12
node10.next = node11

let node13 = new ListNode(2)

console.log(addTwoNumbersAttemptTwo(node10, node13))