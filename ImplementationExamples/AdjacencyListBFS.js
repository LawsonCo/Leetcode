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
    var queue = [start_node]
    // more efficient if seen_nodes is a map
    var seen_nodes = {}
    while (queue.length != 0) {
        node = queue.shift()
        console.log("Searching: " + node)
        if (node == end_node) {
            return true
        }
        seen_nodes[node] = true
        for (var k = 0; k < adjacency_list[node].length; k++){
            if (seen_nodes[adjacency_list[node][k]] == true) {
                continue
            }
            queue.push(adjacency_list[node][k])
        }
    }
    return false
}

console.log(bfsSearch(bfs_dfs_big_diff_list, "A", "E"))