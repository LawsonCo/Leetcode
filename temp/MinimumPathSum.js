// Minimum Path Sum
// Given a graph of node values 
// Find the sum of the cheapest path from n,n to 0,0

class Node { 
    constructor(x, y, val) {
        this.x = x
        this.y = y
        this.val = val
        this.sum = val
    }
    getHash() {
        return [this.x, this.y].toString()
    }
}

function getValidChildren(grid, x, y) {
    let children = []
    if (x < grid.length - 1) {
        children.push(new Node(x+1, y, grid[x+1][y]))
    }
    if (y < grid[0].length - 1) {
        children.push(new Node(x, y+1, grid[x][y+1]))
    }
    return children
}

// Algorithm: 
// At each node, choose the lowest sum child
// Search it, and add its children to the q
// Sort the Q so it is possible to find the lowest sum child again
// WORKS! Can we do better?
function minPathSum(grid) {
    let seen_nodes = {}
    let q = []
    q.push(new Node(0, 0, grid[0][0]))
    while (q.length > 0) {
        curr = q.shift()
        if (seen_nodes[curr.getHash()]) {
            continue
        }
        seen_nodes[curr.getHash()] = true
        if (curr.x == grid.length-1 && curr.y == grid[0].length-1) {
            return curr.sum
        }
        let children = getValidChildren(grid, curr.x, curr.y)
        for (let i = 0; i < children.length; i++) {
            children[i].sum = children[i].sum+curr.sum
            q.push(children[i])
        }
        q.sort(function(a, b) {
            return a.sum - b.sum
        })
    }
}

let test_grid = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
]

//console.log(minPathSum(test_grid))

/*
let q = []
q.push(new Node(0, 0, test_grid[0][0]))
q.push(new Node(1, 1, test_grid[1][1]))
q.push(new Node(2, 1, test_grid[2][1]))
console.log(q)
q.sort(function(a, b) {
    return a.val - b.val
})
console.log(q)
*/
/*

console.log(getValidChildren(test_grid, 2, 2))
*/


let testNode = new Node(1, 1, 4)
//console.log(testNode)
//console.log(testNode.getHash())


// Using Dynamic Programming (BETTER) - Bottom up
// start at n,n
// Iterate from n -> 0, bottom -> top row 
// Everytime we get to a node we know we have solved the one to the right and the one below
// Solve by comparing the current node to the 2 already solved nodes and taking the min + the current value
// Store results in the graph to save memory
function minPathSum2(grid) {
    if (grid.length == 0 || grid[0].length == 0) {
        return 0
    }
    for (x = grid.length-1; x >= 0; x--) {
        for (y = grid[0].length-1; y >= 0; y--) {
            if (x == grid.length-1 && y == grid[0].length-1) {
                continue
            }
            // Initialize these to big values in case there is no right or bottom solution
            let right = 9999999
            let down = 99999999
            if (y != grid[0].length-1) {
                right = grid[x][y+1]+grid[x][y]
            }
            if (x != grid.length-1) {
                down = grid[x+1][y]+grid[x][y]
            }
            grid[x][y] = Math.min(right, down)
        }
    }
    return grid[0][0]
}


let test_grid_2 = [
    [1,3,1,5],
    [1,5,1,5],
    [4,2,1,5]
]

console.log(minPathSum2(test_grid_2))