/**
 * Num Islands 
 * 
 * Given a 2D grid of 1's and 0's 
 * Count the number of islands 
 * 
 * An island is a grouping of 1's and 0's surrounded by water. Diagonal connections between 1's don't count
 */

class Node { 
    constructor(x, y, steps) {
        this.x = x
        this.y = y
        this.identified = false
    }
    getHash() {
        return [this.x, this.y].toString()
    }
}

function getChildren(matrix, loc) {
    let children = []
    if (loc.x != 0 && matrix[loc.x-1][loc.y] == 1) {
        children.push(new Node(loc.x-1, loc.y, loc.steps+1))
    }
    if (loc.y != 0 && matrix[loc.x][loc.y-1] == 1) {
        children.push(new Node(loc.x, loc.y-1, loc.steps+1))
    }
    if (loc.x != (matrix.length -1) && matrix[loc.x+1][loc.y] == 1) {
        children.push(new Node(loc.x+1, loc.y, loc.steps+1))
    }
    if (loc.y != (matrix[0].length -1) && matrix[loc.x][loc.y+1] == 1) {
        children.push(new Node(loc.x, loc.y+1, loc.steps+1))
    }

    return children
}

function identifyIsland(grid, islandNodes, startNode) {
    console.log("Identifying island containing: " + startNode.getHash())
    //console.log(startNode)
    let q = [startNode]
    while (q.length > 0) {
        let curr = q.shift()
        if (islandNodes[curr.getHash()].identified) {
            continue
        }
        //console.log(islandNodes)
        curr.identified = true
        //console.log("Identifying island node: " + curr.getHash())
        let children = getChildren(grid, curr)
        for (let i = 0; i < children.length; i++) {
            if (!islandNodes[children[i].getHash()].identified) {
                q.push(islandNodes[children[i].getHash()])
            }
        }
    }
}

function numIslands(grid) {
    islands = 0
    // Stores all seen 1 nodes, which contain whether or not they have been seen
    let islandNodes = {}
    // Start by finding all 1's, constructing nodes from them, and putting them in a map
    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < grid[0].length; k++) {
            if (grid[i][k] == 1) {
                node = new Node(i, k)
                islandNodes[node.getHash()] = node
            }
        }
    }
    Object.keys(islandNodes).forEach(function(key) {
        if (!islandNodes[key].identified) {
            identifyIsland(grid, islandNodes, islandNodes[key])
            islands++
        }
    });
    return islands
};


let test_map = [
    ["1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","0","1","0","1","1"],
    ["0","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","0"],
    ["1","0","1","1","1","0","0","1","1","0","1","1","1","1","1","1","1","1","1","1"],
    ["1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
    ["1","0","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
    ["1","0","1","1","1","1","1","1","0","1","1","1","0","1","1","1","0","1","1","1"],
    ["0","1","1","1","1","1","1","1","1","1","1","1","0","1","1","0","1","1","1","1"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","1","1"],
    ["1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
    ["0","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
    ["1","1","1","1","1","0","1","1","1","1","1","1","1","0","1","1","1","1","1","1"],
    ["1","0","1","1","1","1","1","0","1","1","1","0","1","1","1","1","0","1","1","1"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","0"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","0"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],
    ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]
]


console.log(numIslands(test_map))