/**
 * Zombie in Matrix
 * 
 * Given a 2d matrix where 1's represent zombies and 0's represent non-zombies 
 * - Determine how many hours until all people infected, or determine if not all people will be infected
 */

function set3sTo1(matrix) {
    let detectedThree = false
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[0].length; k++) {
            if (matrix[i][k] == 3) {
                matrix[i][k] = 1
                detectedThree = true
            }
        }
    }
    return detectedThree
}

function set3s(matrix, i, k) {
    if (i != 0 && matrix[i-1][k] == 0) {
        matrix[i-1][k] = 3
    }
    if (k != 0 && matrix[i][k-1] == 0) {
        matrix[i][k-1] = 3
    }
    if (i != (matrix.length-1) && matrix[i+1][k] == 0) {
        matrix[i+1][k] = 3
    }
    if (k != (matrix[0].length-1) && matrix[i][k+1] == 0) {
        matrix[i][k+1] = 3
    }
}

function calcHour(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[0].length; k++) {
            if (matrix[i][k] == 1) {
                set3s(matrix, i, k)
            }
        }
    }
    return set3sTo1(matrix)
}

function checkEndState(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[0].length; k++) {
            if (matrix[i][k] == 0) {
                return false
            }
        }
    }
    return true
}

var zombieInMaze = function(matrix) {
    let hours = 0
    console.log(matrix)
    while (calcHour(matrix)) {
        console.log(matrix)
        hours++
    }
    return checkEndState(matrix) ? hours : -1
};

let matrix = [
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0]
]

console.log(zombieInMaze(matrix))