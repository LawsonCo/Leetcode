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
    console.log("Searching: " + node)
}

console.log(bfsSearch(bfs_dfs_big_diff_list, "A", "E"))
// A, B, C, D false 
console.log(bfsSearch(adjacency_list, "A", "E"))
// A, B, C, D, F, E, true