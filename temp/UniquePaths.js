// Given a matrix (NxM)
// Start at 0,0, end at bottom right, can only move right and down 
// How many possible solutions? 

var uniquePaths = function(m, n) {
    // m = cols 
    // n = rows
    // Initialize matrix (only need to do cols since arrays can be sparse in JS)
    let matrix = []
    for (i = 0; i < n; i++) {
        matrix.push([])
    }
    matrix[n-1][m-1] = 1
    for (i = n-1; i >= 0; i--) {
        for (k = m-1; k >= 0; k--) {
            if ( (k == m-1) && (i == n-1)) {
                continue
            }
            let right = 0
            let down = 0
            if (k < m-1) {
                right = matrix[i][k+1]
            }
            if (i < n-1) {
                down = matrix[i+1][k]
            }
            matrix[i][k] = right + down
        }
    }
    return matrix[0][0]
};

console.log(uniquePaths(7, 3))