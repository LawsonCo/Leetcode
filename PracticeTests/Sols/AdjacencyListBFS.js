var adjacency_list = {
    "A": ["B", "C", "D"],
    "B": ["C", "F"],
    "C": [],
    "D": ["E"],
    "E": ["A", "F"],
    "F": ["A", "C", "D", "E"]
}

var bfs_dfs_big_diff_list = {
    "A": ["B", "D"],
    "B": [],
    "C": ["B"],
    "D": ["C"]
}

// Search the adjacency list to get from A to E
function bfsSearch (adjacency_list, start_node, end_node) {
    let queue = [start_node]
    let seen_nodes = {}

    while (queue.length > 0) {
        let node = queue.shift()
        if (seen_nodes[node]) {
            continue
        }
        console.log("Searching: " + node)
        seen_nodes[node] = true
        if (node == end_node) {
            return true
        }
        for (i = 0; i < adjacency_list[node].length; i++) {
            if (seen_nodes[adjacency_list[node][i]] !== true) {
                queue.push(adjacency_list[node][i])
            }
        }
    }
    return false
}

console.log(bfsSearch(bfs_dfs_big_diff_list, "A", "E"))
// A, B, C, D false 
console.log(bfsSearch(adjacency_list, "A", "E"))
// A, B, C, D, F, E, true