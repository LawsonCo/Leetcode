var adjacency_list = {
    "A": ["D", "B", "C"],
    "B": ["C", "F"],
    "C": [],
    "D": ["E"],
    "E": ["A", "F"],
    "F": ["A", "C", "D", "E"]
}

// Search the adjacency list to get from A to E
function dfsSearch (adjacency_list, start_node, end_node) {
    let seen_nodes = {}
    let stack = [start_node]
    while (stack.length > 0) {
        let node = stack.pop()
        if (seen_nodes[node]) {
            continue
        }
        console.log("Searching: " + node)
        if (node == end_node) {
            return true
        }
        seen_nodes[node] = true
        for (i = 0; i < adjacency_list[node].length; i++) {
            if (seen_nodes[adjacency_list[node][i]] != true) {
                stack.push(adjacency_list[node][i])
            }
        }
    }
    return false
}

console.log(dfsSearch(adjacency_list, "A", "E"))
// A, C, B, F, E, true