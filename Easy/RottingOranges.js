

function set3sTo2(grid) {
    let detectedThree = false
    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < grid[0].length; k++) {
            if (grid[i][k] == 3) {
                grid[i][k] = 2
                detectedThree = true
            }
        }
    }
    return detectedThree
}

function set3s(grid, i, k) {
    if (i != 0 && grid[i-1][k] == 1) {
        grid[i-1][k] = 3
    }
    if (k != 0 && grid[i][k-1] == 1) {
        grid[i][k-1] = 3
    }
    if (i != (grid.length-1) && grid[i+1][k] == 1) {
        grid[i+1][k] = 3
    }
    if (k != (grid[0].length-1) && grid[i][k+1] == 1) {
        grid[i][k+1] = 3
    }
}

function calcMinute(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < grid[0].length; k++) {
            if (grid[i][k] == 2) {
                set3s(grid, i, k)
            }
        }
    }
    return set3sTo2(grid)
}

function checkEndState(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < grid[0].length; k++) {
            if (grid[i][k] == 1) {
                return false
            }
        }
    }
    return true
}

var orangesRotting = function(grid) {
    let minutes = 0
    while (calcMinute(grid)) {
        minutes++
    }
    return checkEndState(grid) ? minutes : -1
};

let state = [
    [2,1,1],
    [1,1,0],
    [0,0,1]]

console.log(orangesRotting(state))
console.log(state)