/**
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
 */

var searchMatrixRecursive = function(matrix, startInclsive, endInclusive, target, total) {
    console.log("startInclsive: " + startInclsive + " endInclusive: " + endInclusive)

    if (startInclsive < 0 || endInclusive >= total) {
        return false
    }
    if (startInclsive > endInclusive) {
        return false
    }
    let mid = Math.floor((endInclusive + startInclsive) / 2)
    let midRow = Math.floor(mid / matrix[0].length)
    let midCol = mid % matrix[0].length
    console.log("Mid: " + mid + " MidRow: " + midRow + " MidCol: " + midCol)

    if (matrix[midRow][midCol] == target) {
        return true
    }
    if (matrix[midRow][midCol] >  target) {
        return searchMatrixRecursive(matrix, startInclsive, mid-1, target, total)
    } else { 
        return searchMatrixRecursive(matrix, mid+1, endInclusive, target, total)
    }
};

var searchMatrix = function(matrix, target) {
    let total = matrix.length > 1 ? matrix[0].length * matrix.length : matrix[0].length
    console.log(total)
    return searchMatrixRecursive(matrix, 0, total-1, target, total)
};

console.log(searchMatrix([[1, 2]], 3))
//console.log(searchMatrix([[1,3,5,7]], 3))
//console.log(searchMatrix([[1],[3]], 4))
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
//console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))

//var searchMatrix = function(matrix, target) {
    
//};

// Sol: 
// Treat the 2D matrix like a single contiguous array and pass start & end indexes around
// Trick to this question is deriving the matrix location from only a start and end index. 
// This is easy once you realize that the row is the delta / number of cols, and the col is the remainder