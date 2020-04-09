
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
    // Base Case
    if (maze.length == 0) {
        return -1
    }

    let seen_nodes = {}
    let q = [new Node(0, 0, 0)]
    let dest = new Node(maze.length-1, maze[0].length-1)
    while (q.length > 0) {
        curr = q.shift() 
        console.log(curr)
        if (seen_nodes[curr.getHash()]) {
            continue
        }
        if (curr.getHash() == dest.getHash()) {
            return curr.steps
        }
        let children = getChildren(maze, curr)
        console.log(children)
        for (let i = 0; i < children.length; i++) {
            if (!seen_nodes[children[i].getHash()]) {
                q.push(children[i])
            }
        }
    }
    return -1
}

let testMatrix = [[0,1],[1,0]]
console.log(shortestPathBinaryMatrix(testMatrix))