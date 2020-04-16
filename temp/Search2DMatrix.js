/**
 * Given a 2D matrix and a target
 * Return a boolean as to whether or not the target exists
 */



// Use staircase sort
// Start at bottom left
// If smaller, go up
// If bigger, go right
// O(M+N)
var searchMatrix = function(matrix, target) {
    let row = matrix.length-1
    let col = 0
    if (matrix.length == 0 || matrix[0].length == 0) {
        return false
    }
    while (row > 0 || col < matrix[0].length) {
        console.log("Searching: " + matrix[row][col])
        if (matrix[row][col] == target) {
            return true
        }
        if (matrix[row][col] > target) {
            if (row > 0) {
                row--
            } else {
                return false
            }
        } else {
            if (col < matrix[0].length) {
                col++
            } else {
                return false
            }
        }
    }
    return false
};

let test_matrix = [
    [[-5]]
]

console.log(searchMatrix(test_matrix, 5))