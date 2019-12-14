var adjacency_matrix = [
    [0, 1, 0, 1, 1], // node 1
    [1, 0, 0, 1, 0], // node 2
    [0, 0, 0, 0, 1], // node 3
    [0, 0, 0, 0, 0], // node 4
    [0, 1, 0, 0, 0]  // node 5
]

function dfsSearch(adjacency_matrix, start_node, end_node) {
    var stack = [start_node]
    // map is more efficient
    var seen_nodes = {}
    while (stack.length != 0) {
        node = stack.pop()
        log_node = node
        log_node++
        console.log("Searching: " + log_node)
        seen_nodes[node] = true
        if (node == end_node) {
            return true
        }
        for (var i = 0; i < adjacency_matrix[node].length; i++) {
            if (adjacency_matrix[node][i] == 1) {
                if (seen_nodes[i] != true) {
                    stack.push(i)
                }
            }
        }
    }
    return false
}

console.log(dfsSearch(adjacency_matrix, 2, 3))