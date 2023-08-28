/**
 * Shortest Path in Binary matrix
 * 
 * Given a 2D array with 0's and 1's, the start being the top left, and the end being the bottom right
 * 1's are walls and 0's are valid steps
 * 
 * Return the min number of steps to the goal, or -1 if it is impossible
 */

class Node { 
    constructor(x, y, steps) {
        this.x = x
        this.y = y
        this.steps = steps
    }
    getHash() {
        return [this.x, this.y].toString()
    }
}

function getChildren(matrix, loc) {
    let children = []
    if (loc.x != 0 && matrix[loc.x-1][loc.y] != 1) {
        children.push(new Node(loc.x-1, loc.y, loc.steps+1))
    }
    if (loc.y != 0 && matrix[loc.x][loc.y-1] != 1) {
        children.push(new Node(loc.x, loc.y-1, loc.steps+1))
    }
    if (loc.x != (matrix.length -1) && matrix[loc.x+1][loc.y] != 1) {
        children.push(new Node(loc.x+1, loc.y, loc.steps+1))
    }
    if (loc.y != (matrix[0].length -1) && matrix[loc.x][loc.y+1] != 1) {
        children.push(new Node(loc.x, loc.y+1, loc.steps+1))
    }
    
    // Diagonals
    if (loc.x != (matrix.length -1) && loc.y != (matrix[0].length -1) && matrix[loc.x+1][loc.y+1] != 1) {
        children.push(new Node(loc.x+1, loc.y+1, loc.steps+1))
    }
    if (loc.x != 0 && loc.y != (matrix[0].length -1) && matrix[loc.x-1][loc.y+1] != 1) {
        children.push(new Node(loc.x-1, loc.y+1, loc.steps+1))
    }
    if (loc.x != 0 && loc.y != 0 && matrix[loc.x-1][loc.y-1] != 1) {
        children.push(new Node(loc.x-1, loc.y-1, loc.steps+1))
    }
    if (loc.x != (matrix.length -1) && loc.y != 0 && matrix[loc.x+1][loc.y-1] != 1) {
        children.push(new Node(loc.x+1, loc.y-1, loc.steps+1))
    }

    return children
}

var shortestPathBinaryMatrix = function(maze) {
    // Check that start is valid
    if (maze[0][0] == 1) {
        return -1
    }

    let seen_nodes = {}
    let dest = new Node(maze.length-1, maze[0].length-1, 0)
    let q = [new Node(0, 0, 0)]
    while (q.length > 0) {
        let curr = q.shift()
        // Check that nodes coming out of Q haven't been seen
        // This covers case where 2 nodes get added to the Queue before either have been dequeued and "seen"
        if (seen_nodes[curr.getHash()]) {
            continue
        }
        seen_nodes[curr.getHash()] = true
        console.log("Searching: " + curr.getHash() + " for " + dest.getHash())
        if (curr.getHash() == dest.getHash()) {
            console.log("Found!")
            return curr.steps+1
        }
        let children = getChildren(maze, curr)
        for (let i = 0; i < children.length; i++) {
            // Check that nodes aren't already on the queue before dequeuing them
            if (!seen_nodes[children[i].getHash()]) {
                q.push(children[i]) 
                console.log(q)
            }
        }
    }
    return -1
};

let test_matrix = [
    [0,0,0],
    [0,0,0],
    [1,1,0]
]

//let loc = new Node(4, 4, 2)
//console.log(loc.getHash())
//console.log(getChildren(test_matrix, loc))

console.log(shortestPathBinaryMatrix(test_matrix))