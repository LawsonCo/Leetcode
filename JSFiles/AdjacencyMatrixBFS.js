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
    var queue = [start_node]
    // map is more efficient
    var seen_nodes = {}
    while (queue.length != 0) {
        node = queue.shift()
        log_node = node
        log_node++
        console.log("Searching: " + node)
        seen_nodes[node] = true
        if (node == end_node) {
            return true
        }
        for (var i = 0; i < adjacency_matrix[node].length; i++) {
            if (adjacency_matrix[node][i] == 1) {
                if (seen_nodes[i] != true) {
                    queue.push(i)
                }
            }
        }
    }
    return false
}

console.log(bfsSearch(adjacency_matrix, 2, 3))
console.log(bfsSearch(big_boy, 0, 5))