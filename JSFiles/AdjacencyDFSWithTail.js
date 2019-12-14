var adjacency_list = {
    "A": ["D", "C", "B"],
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

class NodeWithTail{
    constructor(node_name) {
        this.node_name = node_name
        this.tail = []
    }
    addToTail(node) {
        this.tail.push(node)
    }
    setTail(tail) {
        this.tail = tail
    }
    getTail() {
        return this.tail
    }
    getName() {
        return this.node_name
    }
}

// Search the adjacency list to get from A to E
// Create a NodeWithTail object whenever we visit a node to keep track of its tail of all nodes visited up to that point 
// The tail is everynode visited to get to parent, plus the parent
function dfsSearch (adjacency_list, start_node, end_node) {
    var stack = [new NodeWithTail(start_node)]
    var seen_nodes = {}
    while (stack.length != 0) {
        node = stack.pop()
        console.log("Searching: " + node.node_name)
        if (node.getName() == end_node) {
            node.addToTail(node.node_name)
            return node.getTail()
        }
        seen_nodes[node.getName()] = true
        parent_tail = node.getTail()
        for (var k = 0; k < adjacency_list[node.getName()].length; k++){
            if (seen_nodes[adjacency_list[node.getName()][k]] == true) {
                continue
            }
            parent_tail_copy = parent_tail.slice()
            new_node = new NodeWithTail(adjacency_list[node.getName()][k])
            parent_tail_copy.push(node.getName())
            new_node.setTail(parent_tail_copy)
            stack.push(new_node)
        }
    }
    return false
}

console.log(dfsSearch(bfs_dfs_big_diff_list, "A", "B"))