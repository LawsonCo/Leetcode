/**
 * Given a 2D matrix and a target
 * Return a boolean as to whether or not the target exists
 */


var searchMatrixRec = function(xStart, xEnd, yStart, yEnd, matrix, target) {
    console.log("Searching range: xStart = " + xStart + " xEnd = " + xEnd + " yStart = " + yStart + " yEnd = " + yEnd)
    if (xStart > xEnd || yStart > yEnd) {
        return false
    }
    let midX = Math.floor((xStart + xEnd)/2)
    let midY = Math.floor((yStart + yEnd)/2)
    console.log("Mid value is: " + matrix[midX][midY])
    console.log("Min is: " + matrix[xStart][yStart])
    console.log("Max is: " + matrix[xEnd][yEnd])
    console.log("Target is: " + target)
    if (target < matrix[xStart][yStart] || target > matrix[xEnd][yEnd]) {
        console.log("Pruning branch, not in range")
        return false
    }
    if (matrix[midX][midY] == target) {
        console.log("Found!")
        return true
    }
    console.log("Recursing")
    let topLeft = searchMatrixRec(xStart, midX-1, yStart, midY, matrix, target)
    let topRight = searchMatrixRec(xStart, midX, midY, yEnd+1, matrix, target)
    let bottomLeft = searchMatrixRec(midX, xEnd, yStart, midY-1, matrix, target)
    let bottomRight = searchMatrixRec(midX, xEnd+1, midY, yEnd, matrix, target)
    return topLeft || topRight || bottomLeft || bottomRight
};


var searchMatrix = function(matrix, target) {
    console.log(matrix)
    let midX = Math.floor((matrix.length-1)/2)
    let midY = Math.floor((matrix[0].length-1)/2)
    return searchMatrixRec(0, matrix.length-1, 0, matrix[0].length-1, matrix, target)
};

let test_matrix = [
    [1,   4,  7, 11, 15],
    [1,   4,  7, 12, 15],
]

console.log(searchMatrix(test_matrix, 11))