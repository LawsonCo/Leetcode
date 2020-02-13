/**
 * Set Matrix Zeroes 
 * 
 * Given an MxN matrix 
 * If an element is 0, set its entire column and row to 0
 * MUST DO IT IN PLACE 
Example Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Example Output:
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
 */

// Set all rows and cols to placeholders
// New 0's will become x's
// Old 0's will become z's
function setRowsAndColsToPlaceholders (matrix, vert_axis, horiz_axis) {
    console.log("Setting Zeroes for vert_axis: " + vert_axis + " and horizontal_axis: "+ horiz_axis)
    console.log(matrix)
    // Set Vertical Axis
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][horiz_axis] == 0 || matrix[i][horiz_axis] == "z") {
            matrix[i][horiz_axis] = "z"
        } else {
            matrix[i][horiz_axis] = "x"
        }
    }

    // Set Horizontal Axis
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[vert_axis][i] == 0 || matrix[vert_axis][i]== "z") {
            matrix[vert_axis][i] = "z"
        } else {
            matrix[vert_axis][i] = "x"
        }
    }

    // Set original zero 
    matrix[vert_axis][horiz_axis] = 0
    console.log(matrix)
}

var setZeroes = function(matrix) {
    // Iterate over the matrix, when a 0 found, set call the set placeholders helper
    // This will set all new 0's to x's, and all existing 0's to z's
    // This is how we can keep track and differentiate old vs. new 0's
    for (let i = 0; i < matrix.length; i++){
        // We can't use the matrix.length for the inner loop since the matrix is MxN
        for (let k = 0; k < matrix[0].length; k++) {
            // Treat 0's and z's the same
            if (matrix[i][k] == 0 || matrix[i][k] == "z") {
                setRowsAndColsToPlaceholders(matrix, i, k)
            }
        }
    }

    // Once we've handled setting all the placeholders, set them all to 0
    for (let i = 0; i < matrix.length; i++){
        for (let k = 0; k < matrix[0].length; k++) {
            if (matrix[i][k] == "x" || matrix[i][k] == "z") {
                matrix[i][k] = 0
            }
        }
    }
    return matrix
};

let test_matrix = [[0,0,0,5],[4,3,1,4],[0,1,1,4],[1,2,1,3],[0,0,1,1]]

console.log(setZeroes(test_matrix))