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
    console.log("Searching: " + node)

}

console.log(dfsSearch(adjacency_list, "A", "E"))
// A, C, B, F, E, true