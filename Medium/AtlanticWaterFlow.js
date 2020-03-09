/**
 * Atlantic Water Flow 
 * 
 * Given an mxn matrix
 * Each cell is a # representing land elevation 
 * Water can start at a cell, and can move in any direction so long as it moves to a smaller elevation
 * Pacific ocean is top and left edges
 * Atlantic ocean is bottom and right edges
 * Find all coordinates where water can reach both oceans
 */

const Atlantic = "Atlantic"
const Pacific = "Pacific"

// getOcean returns the ocean or an empty string
function getOcean(x, y, maxX, maxY) {
    if (x == maxX || y == maxY) {
        return Atlantic
    }
    if (x == 0 || y == 0) {
        return Pacific
    }
    return ""
}

// getChildren gets all children of a location 
function getChildren(x, y, maxX, maxY) {
    let children = []
    if (x > 0) {
        children.push([x - 1, y])
    }
    if (y > 0) {
        children.push([x, y - 1])
    }
    if (x < maxX) {
        children.push([x + 1, y])
    }
    if (y < maxY) {
        children.push([x, y + 1])
    }
    return children
}

function pacificAtlantic(matrix) {
    let maxX = matrix.length - 1
    let maxY = matrix[0].length - 1
    let 
}

function searchNode(x, y, matrix) {
    
}

let island = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
]
let maxX = island.length - 1
let maxY = island[0].length - 1

console.log(getOcean(1, maxY, maxX, maxY))