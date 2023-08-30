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
function bfsSearch (adjacency_list, start_node, end_node) {
    var queue = [new NodeWithTail(start_node)]
    var seen_nodes = {}
    while (queue.length != 0) {
        node = queue.shift()
        if (seen_nodes[node.getName()]) {
            continue
        }
        console.log("Searching: " + node.node_name)
        if (node.getName() == end_node) {
            node.addToTail(node.node_name)
            return node.getTail()
        }
        seen_nodes[node.getName()] = true
        parent_tail = node.getTail()
        for (var k = 0; k < adjacency_list[node.getName()].length; k++){
            if (seen_nodes[adjacency_list[node.getName()][k]]) {
                continue
            }
            parent_tail_copy = parent_tail.slice()
            new_node = new NodeWithTail(adjacency_list[node.getName()][k])
            parent_tail_copy.push(node.getName())
            new_node.setTail(parent_tail_copy)
            queue.push(new_node)
        }
    }
    return false
}

console.log(bfsSearch(adjacency_list, "A", "E"))

console.log(bfsSearch(bfs_dfs_big_diff_list, "A", "B"))