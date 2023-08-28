// Test ID: 23280666331326 

/**
 * Amazon Exam Q1
 * 
 * 
 */


class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.identified = false // flag as to whether node has been associated with a park
    }
    getHash() {
        return [this.x, this.y].toString()
    }
}

// getAdjacent will take a node and return all adjacent nodes
function getAdjacent(grid, rows, column, node) {
    let adjacent = []
    if (node.x > 0 && (grid[node.x -1][node.y] == 1)) {
        //adjacent.push(new Node(node.x-1, node.y))
        adjacent.push([node.x-1, node.y].toString())
    }    
    if (node.y > 0 && (grid[node.x][node.y-1] == 1)) {
        //adjacent.push(new Node(node.x, node.y-1))
        adjacent.push([node.x, node.y-1].toString())
    }  
    if (node.x < rows-1 && (grid[node.x +1][node.y] == 1)) {
        //adjacent.push(new Node(node.x+1, node.y))
        adjacent.push([node.x+1, node.y].toString())
    }  
    if (node.y < column-1 && (grid[node.x][node.y+1] == 1)) {
        //adjacent.push(new Node(node.x, node.y+1))
        adjacent.push([node.x, node.y+1].toString())
    }  
    return adjacent
}

// identifyPark will run a BFS search on the grid and mark all park 
// nodes as identified 
function identifyPark(grid, rows, column, ones, start) {
    let q = [start]
    while (q.length != 0) {
        let curr = q.shift()
        curr.identified = true
        let adjacent = getAdjacent(grid, rows, column, curr)
        for (let i = 0; i < adjacent.length; i++) {
            if (!ones[adjacent[i]].identified) {
                q.push(ones[adjacent[i]])
            }
        }
    }
}

function numberAmazonTreasureTrucks(rows, column, grid)
{
    // Locate all 1 nodes and create a node object representation for them
    if (rows == 0 || column == 0) {
        return 0
    }
    // Switch data structure to map
    let ones = {}
    for (let i = 0; i < rows; i++) {
        for (let k = 0; k < column; k++) {
            if (grid[i][k] == 1) {
                let curr = new Node(i, k)
                ones[curr.getHash()] = curr
            }
        }
    }
    // Search each node to find its park
    let numParks = 0;
    let oneHashes = Object.keys(ones)
    for (let i = 0; i < oneHashes.length; i++) {
        if (!ones[oneHashes[i]].identified) {
            identifyPark(grid, rows, column, ones, ones[oneHashes[i]])
            numParks++
        }
    }
    return numParks++
}

// FUNCTION SIGNATURE ENDS

// Tests I used to validate helpers (manually validated):
// Tests for getAdjacent
/*
let test_matrix_1 = [
    [1, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 0, 0]
]
console.log(getAdjacent(test_matrix_1, new Node(0, 0)))
console.log(getAdjacent(test_matrix_1, new Node(0, 2)))
console.log(getAdjacent(test_matrix_1, new Node(2, 2)))
*/
let test_matrix_1 = [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0],
    [0, 0, 1, 1, 0],
    [1, 1, 0, 0, 1]
]
//console.log(getAdjacent(test_matrix_1, new Node(0, 2)))
console.log(numberAmazonTreasureTrucks(test_matrix_1.length, test_matrix_1[0].length, test_matrix_1))