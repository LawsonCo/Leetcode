// Rotting Oranges using BFS 

class Node {
    constructor(x, y, steps) {
        this.x = x
        this.y = y
        this.steps = steps
    }
    getHash() {
        return [this.x,this.y].toString()
    }
}

// Returns all fresh orange children of the current orange
function getOrangeChildren (node, grid) {
    let children = []
    if (node.x > 0 && grid[node.x-1][node.y] == 1) {
        children.push(new Node(node.x-1, node.y, node.steps+1))
    }
    if (node.x < grid.length-1 && grid[node.x+1][node.y] == 1) {
        children.push(new Node(node.x+1, node.y, node.steps+1))
    }
    if (node.y > 0 && grid[node.x][node.y-1] == 1) {
        children.push(new Node(node.x, node.y-1, node.steps+1))
    }
    if (node.y < grid[0].length-1 && grid[node.x][node.y+1] == 1) {
        children.push(new Node(node.x, node.y+1, node.steps+1))
    }
    return children
}

function orangesRotting(grid) {
    if (grid == null || grid.length == 0 || grid[0].length == 0) {
        return 0
    }
    let q = []
    let fresh_oranges = {}
    for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < grid[0].length; k++) {
            if (grid[i][k] == 2) {
                q.push(new Node(i, k, 0))
            }
            if (grid[i][k] == 1) {
                fresh_oranges[(new Node(i, k, 0)).getHash()] = true
            }
        }
    }
    let visited_oranges = {}
    let max_steps = 0
    while (q.length > 0) {
        let curr = q.shift()
        // Don't search visited oranges
        if (visited_oranges[curr.getHash()]) {
            continue
        }
        max_steps = Math.max(max_steps, curr.steps)
        // Rot orange
        grid[curr.x][curr.y] = 2
        // Remove fresh orange 
        delete fresh_oranges[curr.getHash()]
        // Set node to visited
        visited_oranges[curr.getHash()] = true
        // Add children to Queue
        let children = getOrangeChildren(curr, grid)
        for (let i = 0; i < children.length; i++) {
            q.push(children[i])
        }
        console.log(grid)
        console.log(max_steps)
    }
    if (Object.keys(fresh_oranges).length > 0) {
        return -1
    }
    return max_steps
};

console.log(orangesRotting([[2,2],[1,1],[0,0],[2,0]]))

