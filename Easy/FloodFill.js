// Flood Fill 
// Given a matrix of pixels with integer values to represent colours 
// Flood fill a colour 
// Set all adjacent nodes of that colour 

class Node {
    constructor (x, y) {
        this.x = x
        this.y = y
    }
}

function getNodeChildren(node, colour, matrix) {
    let children = []
    if (node.x > 0 && matrix[node.x-1][node.y] == colour) {
        children.push(new Node(node.x-1, node.y))
    }
    if (node.x < matrix.length-1 && matrix[node.x+1][node.y] == colour) {
        children.push(new Node(node.x+1, node.y))
    }
    if (node.y > 0 && matrix[node.x][node.y-1] == colour) {
        children.push(new Node(node.x, node.y-1))
    }
    if (node.y < matrix[0].length-1 && matrix[node.x][node.y+1] == colour) {
        children.push(new Node(node.x, node.y+1))
    }
    return children
}

var floodFill = function(image, sr, sc, newColor) {
    let q = [new Node(sr, sc)]
    let originalColour = image[sr][sc]
    while (q.length != 0) {
        let curr = q.shift()
        if (image[curr.x][curr.y] == newColor) {
            continue
        }
        image[curr.x][curr.y] = newColor
        q = q.concat(getNodeChildren(curr, originalColour, image))
    }
    return image
};

let test_matrix = [
    [1,1,1],
    [1,1,0],
    [1,0,1]
]
let test_node = new Node(0, 1)

console.log(floodFill(test_matrix, 1, 1, 2))
// console.log(getNodeChildren(test_node, 1, test_matrix))