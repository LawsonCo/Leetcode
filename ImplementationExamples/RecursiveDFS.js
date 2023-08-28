var adjacency_list = {
    "A": ["D", "B", "C"],
    "B": ["C", "F"],
    "C": [],
    "D": ["E"],
    "E": ["A", "F"],
    "F": ["A", "C", "D", "E"]
}

function dfsSearch(list, start_node, end_node) {
    seen_nodes = {}
    return recursiveDFS(list, start_node, end_node, seen_nodes)
}


// Define a secondary recursive dfs function that also takes the seen nodes map
function recursiveDFS(list, start_node, end_node, seen_nodes){
    console.log("Searching: ", start_node)
    if (start_node == end_node) {
        return true
    }
    seen_nodes[start_node] = true
    for (var i = 0; i < adjacency_list[start_node].length; i++) {
        if (seen_nodes[adjacency_list[start_node][i]] != true) {
            if (recursiveDFS(list, adjacency_list[start_node][i], end_node, seen_nodes)) {
                return true
            }
        }
    }
    return false
}

console.log(dfsSearch(adjacency_list, "A", "E"))

// ** Note - Recursive and iterative DFS iterate over children in the reverse order in this implementation 
// Reason is that recursive makes a recursive call on each child 
// Iterative first pushes all children on to stack before recursing 
// We can solve this by reverse iterating => From len -> 0, on one of the child loops