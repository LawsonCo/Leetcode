var adjacency_matrix = [
    [0, 1, 0, 1, 1], // node 1
    [1, 0, 0, 1, 0], // node 2
    [0, 0, 0, 0, 1], // node 3
    [0, 0, 0, 0, 0], // node 4
    [0, 1, 0, 0, 0]  // node 5
]

var big_boy = [ 
    [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0, 0] 
]

function bfsSearch(adjacency_matrix, start_node, end_node) {
    // Still only 1 dimension of nodes! Can store them in map 
    let seen_nodes = {}
    let queue = [start_node]
    while (queue.length > 0) {
        let node = queue.shift()
        if (seen_nodes[node]) {
            continue
        }
        console.log("Searching: " + node)
        if (node == end_node) {
            return true
        }
        seen_nodes[node] = true
        for (i = 0; i < adjacency_matrix[node].length; i++) {
            if (adjacency_matrix[node][i] && seen_nodes[i] !== true) {
                queue.push(i)
            }
        }
    }
    return false
}

console.log(bfsSearch(adjacency_matrix, 2, 3))
// 2, 4, 1, 0, 3, true
console.log(bfsSearch(big_boy, 0, 5))
// 0, 1, 6, 8, 4, 9, 2, 3, 7, 5, true